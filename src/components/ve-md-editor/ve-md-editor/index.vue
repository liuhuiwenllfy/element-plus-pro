<script lang="ts" setup>

import {MdEditor, ToolbarNames} from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'
import {nextTick, PropType, ref, watch} from 'vue'
import axios from 'axios'

const props = defineProps({
  // 唯一标识
  editorId: {
    type: String,
    required: false,
    default: () => 'md-ve-editor-v3'
  },
  // 内容
  modelValue: {
    type: String,
    required: false,
    default: () => ''
  },
  // 代码区域是否展示行号
  showCodeRowNumber: {
    type: Boolean,
    required: false,
    default: () => false
  },
  // 主题 'default' | 'github' | 'vuepress' | 'mk-cute' | 'smart-blue' | 'cyanosis'
  previewTheme: {
    type: String as PropType<'default' | 'github' | 'vuepress' | 'mk-cute' | 'smart-blue' | 'cyanosis'>,
    required: false,
    default: () => 'github'
  },
  // 是否用图表展示内容
  noMermaid: {
    type: Boolean,
    required: false,
    default: () => false
  },
  // 代码样式 'atom'|'a11y'|'github'|'gradient'|'kimbie'|'paraiso'|'qtcreator'|'stackoverflow'
  codeTheme: {
    type: String as PropType<'atom' | 'a11y' | 'github' | 'gradient' | 'kimbie' | 'paraiso' | 'qtcreator' | 'stackoverflow'>,
    required: false,
    default: () => 'github'
  },
  // 占位信息
  placeholder: {
    type: String,
    required: false,
    default: () => '请输入...'
  },
  // 页脚
  footers: {
    type: Array<any>,
    required: false,
    default: () => []
  },
  // 是否显示上传图片
  noUploadImg: {
    type: Boolean,
    required: false,
    default: () => false
  },
  // 内容长度限制
  maxLength: {
    type: Number,
    required: false,
    default: () => 65535
  },
  // 是否显示按钮文字
  showToolbarName: {
    type: Boolean,
    required: false,
    default: () => false
  },
  // 上传地址
  uploadUrl: {
    type: String,
    required: false,
    default: () => ''
  },
  // 上传token
  authorization: {
    type: String,
    required: false,
    default: () => ''
  },
  // 上传展示地址前缀
  addressPrefix: {
    type: String,
    required: false,
    default: () => ''
  },
  // 国际化  'zh-CN'|'en-US'
  language: {
    type: String as PropType<'zh-CN' | 'en-US' | string>,
    required: false,
    default: () => 'zh-CN'
  },
  // 夜间模式  'dark'|'light'
  theme: {
    type: String as PropType<'dark' | 'light'>,
    required: false,
    default: () => 'dark'
  }
})
const _text = ref(props.modelValue)

watch(() => props.modelValue, () => {
  nextTick(() => {
    _text.value = props.modelValue
  })
})

const toolbars = ref<ToolbarNames[]>([
  'bold',
  'underline',
  'italic',
  '-',
  'title',
  'strikeThrough',
  'sub',
  'sup',
  'quote',
  'unorderedList',
  'orderedList',
  'task',
  '-',
  'codeRow',
  'code',
  'link',
  'image',
  'table',
  'mermaid',
  '-',
  'revoke',
  'next',
  0,
  '=',
  'pageFullscreen',
  'fullscreen',
  'preview',
  'catalog',
])

const getText = () => {
  return _text.value
}

defineExpose({
  getText
})

const onUploadImg = async (files: Array<File>, callback: any) => {
  const res = await Promise.all(
      files.map((file) => {
        return new Promise((rev, rej) => {
          const form = new FormData()
          form.append('file', file)
          //@ts-ignore
          axios.post(import.meta.env.VITE_UPLOAD_GRIDFS_URL, form, {
            headers: {
              'Content-Type': 'multipart/form-data',
              authorization: props.authorization
            }
          }).then((res) => rev(res)).catch((error) => rej(error))
        })
      })
  )

  callback(res.map((item: any) => {
    return props.addressPrefix + item.data.data
  }))
}
</script>

<template>
  <MdEditor
      v-model="_text"
      :codeTheme="codeTheme"
      :editorId="editorId"
      :footers="footers"
      :language="props.language"
      :noMermaid="noMermaid"
      :noUploadImg="noUploadImg"
      :placeholder="placeholder"
      :previewTheme="previewTheme"
      :scroll-auto="true"
      :showCodeRowNumber="showCodeRowNumber"
      :showToolbarName="showToolbarName"
      :theme="theme"
      :toolbars="toolbars"
      @onUploadImg="onUploadImg"
  >
  </MdEditor>
</template>

<style lang="scss" scoped>
.md-editor-dark, .md-editor-modal-container[data-theme='dark'] {
  --md-bk-color: #1D1E1F !important;
}
</style>
