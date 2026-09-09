<script lang="ts" setup>
import {PropType, computed, nextTick, onBeforeUnmount, onMounted, ref, watch} from 'vue'
import {ElButton} from 'element-plus'
import 'element-plus/es/components/button/style/css'
import {removeRectsInImageData, type Rect} from './inpaint'

const props = defineProps({
  // 原图 dataURL
  img: {
    type: String,
    required: true
  },
  // 国际化 'zhCn'|'en'
  language: {
    type: String as PropType<'zhCn' | 'en' | string>,
    required: false,
    default: () => 'zhCn'
  }
})

const content: any = {
  tip: {
    zhCn: '在图片上按住鼠标拖拽，框选要去除的水印区域（可框选多个，支持撤销/清空）',
    en: 'Drag on the image to select the watermark area(s) to remove'
  },
  undo: {zhCn: '撤销', en: 'undo'},
  clear: {zhCn: '清空', en: 'clear'}
}

const areaRef = ref<HTMLElement>()
const imgRef = ref<HTMLImageElement>()
const drawing = ref<Rect | null>(null)
const rects = ref<Rect[]>([])
const scaleX = ref(1)
const scaleY = ref(1)

// 处理结果缓存，图片变化后重置
let resultDataURL: string | null = null
let resultBlob: Blob | null = null
let preparing: Promise<boolean> | null = null
let disposed = false

/** 依据当前图片实际显示尺寸计算“源像素 : 显示像素”的比例 */
const measure = () => {
  const img = imgRef.value
  if (!img || !img.naturalWidth || !img.clientWidth) return
  scaleX.value = img.naturalWidth / img.clientWidth
  scaleY.value = img.naturalHeight / img.clientHeight
}

watch(() => props.img, () => {
  rects.value = []
  drawing.value = null
  resultDataURL = null
  resultBlob = null
  preparing = null
  nextTick(measure)
})

// 鼠标坐标 → 图片原始像素坐标
const toSource = (clientX: number, clientY: number) => {
  const rect = areaRef.value?.getBoundingClientRect()
  if (!rect) return {x: 0, y: 0}
  return {
    x: (clientX - rect.left) * scaleX.value,
    y: (clientY - rect.top) * scaleY.value
  }
}

let dragging = false
let startPoint = {x: 0, y: 0}

const onMouseDown = (e: MouseEvent) => {
  if (e.button !== 0 || !areaRef.value) return
  dragging = true
  startPoint = toSource(e.clientX, e.clientY)
  drawing.value = {x: startPoint.x, y: startPoint.y, width: 0, height: 0}
  window.addEventListener('mousemove', onMouseMove)
  window.addEventListener('mouseup', onMouseUp)
}

const onMouseMove = (e: MouseEvent) => {
  if (!dragging) return
  const {x, y} = toSource(e.clientX, e.clientY)
  const img = imgRef.value
  const maxX = img?.naturalWidth ?? 0
  const maxY = img?.naturalHeight ?? 0
  const cx = Math.min(Math.max(x, 0), maxX)
  const cy = Math.min(Math.max(y, 0), maxY)
  drawing.value = {
    x: Math.min(startPoint.x, cx),
    y: Math.min(startPoint.y, cy),
    width: Math.abs(cx - startPoint.x),
    height: Math.abs(cy - startPoint.y)
  }
}

const onMouseUp = () => {
  window.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('mouseup', onMouseUp)
  const d = drawing.value
  dragging = false
  drawing.value = null
  // 显示尺寸过小视为误触
  if (d && d.width / scaleX.value >= 4 && d.height / scaleY.value >= 4) {
    rects.value.push({x: d.x, y: d.y, width: d.width, height: d.height})
  }
}

onMounted(() => nextTick(measure))

onBeforeUnmount(() => {
  disposed = true
  window.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('mouseup', onMouseUp)
})

/** Rect → 显示坐标样式 */
const rectStyle = (r: Rect) => ({
  left: `${r.x / scaleX.value}px`,
  top: `${r.y / scaleY.value}px`,
  width: `${r.width / scaleX.value}px`,
  height: `${r.height / scaleY.value}px`
})

const rectList = computed(() => rects.value.map((r, index) => ({...r, index})))

const undo = () => rects.value.pop()
const clearAll = () => (rects.value = [])
const removeAt = (index: number) => rects.value.splice(index, 1)

const delay = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms))

/**
 * 单飞处理：渲染原图到自然尺寸 canvas → 内容识别修复 → 生成 PNG dataURL / Blob。
 * 处理为异步分片执行，不会长时间阻塞页面。图片未加载完成时返回 false，可稍后重试。
 */
const runPrepare = async (): Promise<boolean> => {
  if (resultDataURL !== null) return true
  if (preparing) return preparing
  preparing = (async () => {
    const img = imgRef.value
    if (!img || !img.naturalWidth) return false
    const width = img.naturalWidth
    const height = img.naturalHeight
    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    const ctx = canvas.getContext('2d')
    if (!ctx) return false
    ctx.drawImage(img, 0, 0, width, height)
    const imageData = ctx.getImageData(0, 0, width, height)
    const out = await removeRectsInImageData(imageData, rects.value)
    ctx.putImageData(out, 0, 0)
    resultDataURL = canvas.toDataURL('image/png')
    return await new Promise<boolean>((resolve) => {
      canvas.toBlob((blob) => {
        if (blob) {
          resultBlob = blob
        } else {
          // 编码失败：清空中间结果，允许下次重试
          resultDataURL = null
          resultBlob = null
        }
        resolve(blob !== null)
      }, 'image/png')
    })
  })()
  const ok = await preparing
  preparing = null
  return ok
}

/** 等待某条件满足（处理结果就绪），期间自动重试处理 */
const waitReady = async (isReady: () => boolean) => {
  while (!isReady() && !disposed) {
    const ok = await runPrepare()
    if (!ok) await delay(100)
  }
}

/** 获取去水印结果（可能未就绪时内部自动重试处理），供父级在“确认”后 await */
const getResult = async (): Promise<{dataURL: string; blob: Blob} | null> => {
  await waitReady(() => resultDataURL !== null && resultBlob !== null)
  if (disposed || resultDataURL === null || resultBlob === null) return null
  return {dataURL: resultDataURL, blob: resultBlob}
}

defineExpose({
  getResult,
  getRegionCount: () => rects.value.length
})
</script>

<template>
  <div class="ve-watermark-remove">
    <p class="wm-tip">{{ content.tip[language] }}</p>
    <div
        ref="areaRef"
        class="wm-area"
        @mousedown.prevent="onMouseDown">
      <img
          ref="imgRef"
          :src="img"
          alt=""
          class="wm-image"
          draggable="false"
          @load="measure"
          @dragstart.prevent/>
      <div
          v-if="drawing"
          class="wm-rect wm-drawing"
          :style="rectStyle(drawing)"/>
      <div
          v-for="item in rectList"
          :key="item.index"
          class="wm-rect"
          :style="rectStyle(item)"
          @mousedown.prevent.stop>
        <span class="wm-rect-del" @mousedown.stop.prevent="removeAt(item.index)">✕</span>
      </div>
    </div>
    <div class="wm-actions">
      <el-button size="small" :disabled="!rects.length" @click="undo">
        {{ content.undo[language] }}
      </el-button>
      <el-button size="small" :disabled="!rects.length" @click="clearAll">
        {{ content.clear[language] }}
      </el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ve-watermark-remove {
  display: flex;
  flex-direction: column;
  align-items: center;

  .wm-tip {
    margin: 0 0 10px;
    color: var(--el-text-color-secondary);
    font-size: 13px;
    text-align: center;
  }

  .wm-area {
    position: relative;
    display: inline-block;
    max-width: 100%;
    cursor: crosshair;
    user-select: none;
    line-height: 0;

    .wm-image {
      display: block;
      max-width: 100%;
      max-height: calc(80vh - 260px);
      width: auto;
      height: auto;
    }

    .wm-rect {
      position: absolute;
      box-sizing: border-box;
      border: 1px solid #409eff;
      background: rgba(64, 158, 255, 0.18);
      pointer-events: auto;

      &.wm-drawing {
        pointer-events: none;
        border-color: #f56c6c;
        background: rgba(245, 108, 108, 0.18);
      }

      .wm-rect-del {
        position: absolute;
        top: -9px;
        right: -9px;
        width: 18px;
        height: 18px;
        line-height: 16px;
        text-align: center;
        font-size: 12px;
        color: #fff;
        background: #f56c6c;
        border-radius: 50%;
        cursor: pointer;
      }
    }
  }

  .wm-actions {
    margin-top: 12px;
  }
}
</style>
