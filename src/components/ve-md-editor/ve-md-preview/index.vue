<script lang="ts" setup>

import {MdPreview} from 'md-editor-v3'
import 'md-editor-v3/lib/preview.css'
import {PropType, ref} from "vue";
import {Anchor} from "ve-anchor/Anchor.ts";
import VeAnchor from "ve-anchor/index.vue";

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
  showAnchor: {
    type: Boolean,
    required: false,
    default: () => false
  },
  height: {
    type: String,
    required: false,
    default: () => '300px'
  },
})

const items = ref<Anchor[]>([])

const onGetCatalog = (catalog: Array<any>) => {
  items.value = []
  catalog.forEach((item, index) => {
    items.value.push({
      level: item.level,
      id: props.idPrefix + index,
      title: item.text
    })
  })
}

const mdHeadingId = (_text: string, _level: number, index: number) => props.idPrefix + (index - 1);
</script>

<template>
  <ve-anchor v-if="items.length > 0 && showAnchor" :height="height" :items="items">
    <template #default>
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
  </ve-anchor>
  <MdPreview
      v-else
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
