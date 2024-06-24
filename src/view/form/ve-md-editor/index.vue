<script lang="ts" setup>

import VePage from '@/components/ve-page/index.vue'
import VeMdEditor from '@/components/ve-md-editor/ve-md-editor/index.vue'
import VeMdPreview from '@/components/ve-md-editor/ve-md-preview/index.vue'
import {ref} from "vue";
import {useCommonStore} from "@/pinia/common.ts";
import code from './index.md?raw'

const _value = ref('CodeEase是一个致力于为用户提供便捷、高效、有趣的在线平台，它是一个标准化的低代码平台')
const stats = [
  {
    name: 'editorId',
    instructions: '唯一标识',
    type: 'string',
    optional: '-',
    default: 'md-ve-editor-v3',
  },
  {
    name: 'modelValue',
    instructions: '内容',
    type: 'string',
    optional: '-',
    default: '-',
  },
  {
    name: 'showCodeRowNumber',
    instructions: '代码区域是否展示行号',
    type: 'boolean',
    optional: 'true-是；false-否',
    default: 'false',
  },
  {
    name: 'previewTheme',
    instructions: '主题',
    type: 'string',
    optional: 'default | github | vuepress | mk-cute | smart-blue | cyanosis',
    default: 'github',
  },
  {
    name: 'noMermaid',
    instructions: '是否用图表展示内容',
    type: 'boolean',
    optional: 'true-是；false-否',
    default: 'false',
  },
  {
    name: 'codeTheme',
    instructions: '代码样式',
    type: 'string',
    optional: 'atom | a11y | github | gradient | kimbie | paraiso | qtcreator | stackoverflow',
    default: 'github',
  },
  {
    name: 'placeholder',
    instructions: '占位信息',
    type: 'string',
    optional: '-',
    default: '请输入...',
  },
  {
    name: 'footers',
    instructions: '页脚',
    type: 'array<Footers>',
    optional: '-',
    default: '[]',
  },
  {
    name: 'noUploadImg',
    instructions: '是否显示上传图片',
    type: 'boolean',
    optional: 'true-是；false-否',
    default: 'false',
  },
  {
    name: 'maxLength',
    instructions: '内容长度限制',
    type: 'number',
    optional: '-',
    default: '65535',
  },
  {
    name: 'showToolbarName',
    instructions: '是否显示按钮文字',
    type: 'boolean',
    optional: 'true-是；false-否',
    default: 'false',
  },
  {
    name: 'uploadUrl',
    instructions: '上传地址',
    type: 'string',
    optional: '-',
    default: '-',
  },
  {
    name: 'authorization',
    instructions: '上传token',
    type: 'string',
    optional: '-',
    default: '-',
  },
  {
    name: 'addressPrefix',
    instructions: '上传展示地址前缀',
    type: 'string',
    optional: '-',
    default: '-',
  },
  {
    name: 'language',
    instructions: '国际化',
    type: 'string',
    optional: 'zh-CN | en-US',
    default: 'zh-CN',
  },
  {
    name: 'theme',
    instructions: '夜间模式',
    type: 'string',
    optional: 'dark | light',
    default: 'dark',
  },
]

const incident = [
  {
    name: 'onChange',
    instructions: '内容变更回调',
    callback: 'modelValue',
  },
]

const commonStore = useCommonStore();
</script>

<template>
  <ve-page id="ve-md-editor" :code="code" :incident="incident" :stats="stats" title="ve-md-editor md文档">
    <template #default>
      <h3>编辑区域</h3>
      <ve-md-editor :model-value="_value" :theme="commonStore.getDark? 'dark':'light'"></ve-md-editor>
      <h3>预览区域</h3>
      <ve-md-preview :model-value="_value" :theme="commonStore.getDark? 'dark':'light'"></ve-md-preview>
    </template>
  </ve-page>
</template>

<style lang="scss" scoped>

</style>
