<script lang="ts" setup>

import {MdPreview} from 'md-editor-v3'
import 'md-editor-v3/lib/preview.css'
import {PropType} from "vue";

defineProps({
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
  }
})
</script>

<template>
  <MdPreview
      class="md"
      :editorId="editorId"
      :modelValue="modelValue"
      :previewTheme="previewTheme"
      :theme="theme"
  />
</template>

<style lang="scss" scoped>
.md-editor-dark, .md-editor-modal-container[data-theme='dark'] {
  --md-bk-color: #1D1E1F !important;
}

.md {
  padding: 10px 20px;
  border-radius: 4px;
}
</style>
