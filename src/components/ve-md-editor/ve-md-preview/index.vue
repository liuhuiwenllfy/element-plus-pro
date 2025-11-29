<script lang="ts" setup>

import {MdPreview} from 'md-editor-v3'
import 'md-editor-v3/lib/preview.css'
import {PropType} from "vue";

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
  // 主题 'default' | 'github' | 'vuepress' | 'mk-cute' | 'smart-blue' | 'cyanosis'
  previewTheme: {
    type: String as PropType<'default' | 'github' | 'vuepress' | 'mk-cute' | 'smart-blue' | 'cyanosis'>,
    required: false,
    default: () => 'github'
  },
  // 夜间模式  'dark'|'light'
  theme: {
    type: String as PropType<'dark' | 'light'>,
    required: false,
    default: () => 'dark'
  },
  idPrefix: {
    type: String,
    required: false,
    default: () => 'anchor-'
  },
})

const emits = defineEmits(['onGetCatalog'])

interface Anchor {
  level: number
  id: string
  title: string
}

const onGetCatalog = (catalog: any[]) => {
  const items = [] as Anchor[]
  catalog.forEach((item, index) => {
    items.push({
      level: item.level,
      id: 'anchor-' + index,
      title: item.text
    })
  });
  emits('onGetCatalog', items)
}

const mdHeadingId = (options: any) => props.idPrefix + (options.index - 1);
</script>

<template>
  <MdPreview
      class="md"
      :editorId="editorId"
      :modelValue="modelValue"
      :previewTheme="previewTheme"
      :theme="theme"
      @onGetCatalog="onGetCatalog"
      :mdHeadingId="<any>mdHeadingId"
  />
</template>

<style lang="scss" scoped>
.md-editor-dark, .md-editor-modal-container[data-theme='dark'] {
  --md-bk-color: #1D1E1F !important;
}

.md {
  padding: 10px 20px;
  border-radius: 4px;
  z-index: 0
}
</style>
