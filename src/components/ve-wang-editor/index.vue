<!--
富文本编辑器（目前不支持上传到mongodb数据库）
-->
<script lang="ts" setup>
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import {onBeforeUnmount, ref, shallowRef, watch} from 'vue'
import {i18nChangeLanguage, IDomEditor, IEditorConfig, SlateElement} from '@wangeditor/editor'
import {Editor, Toolbar} from '@wangeditor/editor-for-vue'
import {useI18n} from 'vue-i18n'
import {store} from '@/vuex/store'
import {resData} from '@/entity/res'
import {ElMessage} from 'element-plus'

const {t} = useI18n()

const props = defineProps({
  placeholder: {
    type: String,
    required: false,
    default: () => ''
  },
  editorHeight: {
    type: Number,
    required: false,
    default: () => 500
  },
  content: {
    type: String,
    required: false,
    default: () => ''
  },
  toolbarDirection: {
    type: String,
    required: false,
    default: () => ''
  },
  mode: {
    type: String,
    required: false,
    default: () => 'default'
  },
  toolbarShow: {
    type: Boolean,
    required: false,
    default: () => true
  }
})

//图片参数
type ImageElement = SlateElement & {
  src: string
  alt: string
  url: string
  href: string
}

type VideoElement = SlateElement & {
  src: string
  poster?: string
}

type InsertFnType = (url: string, alt: string, href: string) => void
type InsertFnType1 = (url: string, poster: string) => void

//解决国际化切换问题
const loading = ref(false)

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()

// 内容 HTML
const valueHtml = ref(props.content)

//内容变化回调
const emits = defineEmits(['handleChange'])
const handleChange = (editor: IDomEditor) => {
  emits('handleChange', editor.getHtml())
}

//工具栏自定义
const toolbarConfig = {}

// 编辑器自定义
const editorConfig: Partial<IEditorConfig> = {  // TS 语法
  MENU_CONF: {},
  placeholder: props.placeholder,
  maxLength: 65535
}

//上传图片
editorConfig.MENU_CONF['uploadImage'] = {
  //@ts-ignore
  server: import.meta.env.VITE_UPLOAD_LOCAL_IMAGE_URL,
  fieldName: 'file',
  headers: {},
  // 自定义插入图片
  customInsert(res: resData, insertFn: InsertFnType) {  // TS 语法
    // res 即服务端的返回结果
    if (res.ok) {
      // 从 res 中找到 url alt href ，然后插入图片
      insertFn(res.msg, res.msg, res.msg)
    } else {
      ElMessage.error(res.msg)
    }
  },
  // 上传错误，或者触发 timeout 超时
  onError(file: File, err: any, res: any) {  // TS 语法
    ElMessage.error(err.message)
  },
}
// 插入链接
editorConfig.MENU_CONF['insertLink'] = {
  parseLinkUrl: customParseLinkUrl, // 补全链接
}
// 更新链接
editorConfig.MENU_CONF['editLink'] = {
  parseLinkUrl: customParseLinkUrl, // 补全链接
}
// 插入图片连接
editorConfig.MENU_CONF['insertImage'] = {
  onInsertedImage(imageNode: ImageElement | null) {
    if (imageNode == null) return
    const {src, alt, url, href} = imageNode
    console.log('inserted image', src, alt, url, href)
  },
  parseImageSrc: customParseLinkUrl, // 补全链接
}
// 编辑图片连接
editorConfig.MENU_CONF['editImage'] = {
  onUpdatedImage(imageNode: ImageElement | null) {
    if (imageNode == null) return
    const {src, alt, url} = imageNode
    console.log('updated image', src, alt, url)
  },
  parseImageSrc: customParseLinkUrl, // 补全链接
}
//新增视频连接
editorConfig.MENU_CONF['insertVideo'] = {
  onInsertedVideo(videoNode: VideoElement | null) {  // TS 语法
    if (videoNode == null) return
    const {src} = videoNode
    console.log('inserted video', src)
  },
  parseVideoSrc: customParseLinkUrl, // 也支持 async 函数
}
//上传视频
editorConfig.MENU_CONF['uploadVideo'] = {
  //@ts-ignore
  server: import.meta.env.VITE_UPLOAD_LOCAL__VIDEO_URL,
  fieldName: 'file',
  headers: {},
  // 自定义插入视频
  customInsert(res: resData, insertFn: InsertFnType1) {  // TS 语法
    // res 即服务端的返回结果
    if (res.ok) {
      // 从 res 中找到 url poster ，然后插入视频
      insertFn(res.data.url, res.data.poster)
    } else {
      ElMessage.error(res.msg)
    }
  },
  // 上传错误，或者触发 timeout 超时
  onError(file: File, err: any, res: any) {  // TS 语法
    ElMessage.error(err.message)
  },
}

//兼容国际化
i18nChangeLanguage(store.state.internationalization === 'zhCn' ? 'zh-CN' : 'en')
//监听国际化变化做出切换动作
watch(() => store.state.internationalization, () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
    editorConfig.placeholder = props.placeholder
    i18nChangeLanguage(store.state.internationalization === 'zhCn' ? 'zh-CN' : 'en')
  }, 800)
})

//初始化回调
const handleCreated = (editor: any) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor === null) return
  editor.destroy()
})

// 自定义转换链接 url
function customParseLinkUrl(url: string): string {
  if (url && message.indexOf('http') === -1) {
    return `https://${url}`
  }
  return url
}

//兼容element-plus表单提交验证边框状态
const validateFlag = ref(true)
//验证是否有内容
const validate = () => {
  const flag = valueHtml.value !== '' && valueHtml.value !== '<p><br></p>'
  setTimeout(() => {
    validateFlag.value = flag
  }, 1)
  return flag
}

//清空内容
const validateClear = () => {
  validateFlag.value = true
  valueHtml.value = ''
}

const setHtml = (val: any) => {
  valueHtml.value = val
}
const setDisable = () => {
  editorRef.value.disable()
}
defineExpose({
  validate,
  validateClear,
  setHtml,
  setDisable
})
</script>

<template>
  <div :class="!validateFlag? `${toolbarDirection} wang-editor-error`:`${toolbarDirection}`" class="ve-wang-editor">
    <Toolbar
        v-show="toolbarShow"
        :default-config="toolbarConfig"
        :editor="editorRef"
        :mode="mode"
        class="wang-editor-tools"
    />
    <Editor
        v-model="valueHtml"
        :default-config="editorConfig"
        :mode="mode"
        :style="{height: `${editorHeight}px`}"
        class="wang-editor-editor"
        @onChange="handleChange"
        @onCreated="handleCreated"
    />
  </div>
</template>

<style lang="less" scoped>
.ve-wang-editor {
  width: 100%;
  padding-top: 1px;
  border: var(--el-border);
  border-radius: 4px;
  z-index: 99;

  .wang-editor-tools {
    border-bottom: var(--el-border)
  }

  .wang-editor-editor {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    overflow-y: hidden;

    ::v-deep(.w-e-text-placeholder) {
      top: 10px;
      line-height: 34px;
    }
  }

  .w-e-bar-item button {
    border-radius: 4px;
  }

  .w-e-bar {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
}

.wang-editor-error {
  border: 1px solid var(--el-color-danger);
}

.wang-editor-text-error {
  color: var(--el-color-danger);
  margin-left: 2px;
}

.top:not(.w-e-full-screen-container) {
  :has([data-menu-key=headerSelect]) > ::v-deep(.w-e-select-list) {
    top: -300px;
  }

  :has([data-menu-key=group-more-style]) > ::v-deep(.w-e-bar-item-menus-container) {
    top: -240px;
  }

  :has([data-menu-key=color]) > ::v-deep(.w-e-drop-panel) {
    top: -295px;
  }

  :has([data-menu-key=bgColor]) > ::v-deep(.w-e-drop-panel) {
    top: -295px;
  }

  :has([data-menu-key=fontSize]) > ::v-deep(.w-e-select-list) {
    top: -388px;
  }

  :has([data-menu-key=fontFamily]) > ::v-deep(.w-e-select-list) {
    top: -388px;
  }

  :has([data-menu-key=lineHeight]) > ::v-deep(.w-e-select-list) {
    top: -285px;
  }

  :has([data-menu-key=group-justify]) > ::v-deep(.w-e-bar-item-menus-container) {
    top: -200px;
  }

  :has([data-menu-key=group-indent]) > ::v-deep(.w-e-bar-item-menus-container) {
    top: -120px;
  }

  :has([data-menu-key=emotion]) > ::v-deep(.w-e-drop-panel) {
    top: -420px;
  }

  :has([data-menu-key=group-image]) > ::v-deep(.w-e-bar-item-menus-container) {
    top: -120px;
  }

  :has([data-menu-key=group-video]) > ::v-deep(.w-e-bar-item-menus-container) {
    top: -120px;
  }

  :has([data-menu-key=insertTable]) > ::v-deep(.w-e-drop-panel) {
    top: -232px;
  }
}

</style>
