<script lang="ts" setup>
import RecursiveMenu from 've-recursive-menu/index.vue'
import {nextTick, PropType, reactive, watch} from 'vue'
import {More} from '@element-plus/icons-vue'
import {MenuInfoShowVo} from '../MenuInfoShowVo'
import {ElIcon, ElMenu, ElSubMenu} from 'element-plus'
import 'element-plus/es/components/menu/style/css'
import 'element-plus/es/components/icon/style/css'
import 'element-plus/es/components/sub-menu/style/css'

const props = defineProps({
  menuData: {
    type: Array<MenuInfoShowVo>,
    required: false,
    default: () => []
  },
  language: {
    type: String as PropType<'zhCn' | 'en'>,
    required: false,
    default: () => 'zhCn'
  },
  defaultActive: {
    type: String,
    required: false,
    default: () => ''
  }
})

const data = reactive({
  show: false,
  maxSize: 0
})

watch(() => props.menuData, () => {
  nextTick(() => {
    maxMenuSize()
    window.addEventListener('resize', () => {
      maxMenuSize()
    })
  })
}, {immediate: true})

const maxMenuSize = () => {
  const menuWidth = document.body.clientWidth - document.getElementsByClassName('header-left-li-logo')[0].clientWidth - document.getElementsByClassName('header-right-ul')[0].clientWidth
  const itemWidthList = []
  let itemWidthSum = 0
  for (let i = 0; i < props.menuData.length; i++) {
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')
    if (context) {
      context.font = '14px "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "\\5fae\\8f6f\\96c5\\9ed1", Arial, sans-serif'
      const metrics = context.measureText(props.language === 'en' ? props.menuData[i].menuNameEn : props.menuData[i].menuName)
      const itemWidth = metrics.width + 93
      itemWidthList.push(itemWidth)
      itemWidthSum += itemWidth
    }
  }
  let currentWidth = 0
  data.maxSize = 0
  itemWidthList.forEach(item => {
    currentWidth += item
    if ((currentWidth + (itemWidthSum > menuWidth ? 93 : 0)) < menuWidth) {
      data.maxSize += 1
    }
  })
  window.removeEventListener('resize', () => {
  })
}
</script>

<template>
  <div class="menu">
    <el-menu
        :default-active="defaultActive"
        :ellipsis="false"
        mode="horizontal"
        router
    >
      <recursive-menu :menu-data="menuData.slice(0,data.maxSize)"/>
      <el-sub-menu v-if="menuData.length > 1 && menuData.length > data.maxSize"
                   index="5962e9dcbb31498a8d7045b5a96605ff">
        <template #title>
          <el-icon>
            <More/>
          </el-icon>
        </template>
        <recursive-menu :menu-data="menuData.slice(data.maxSize)"/>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<style lang="scss" scoped>
.menu {
  display: inline-block;

  .el-menu {
    height: 59px;
    float: left;
    border-bottom: none;
  }
}
</style>
