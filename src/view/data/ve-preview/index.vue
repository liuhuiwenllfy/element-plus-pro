<script lang="ts" setup>
import VePage from "@/components/ve-page/index.vue";
import VePreview from '@/components/ve-preview/index.vue'
import code from './index.md?raw'
import json from '@/components/ve-preview/package.json'

const stats = [
  {
    name: 'list',
    instructions: '图片集合',
    type: 'string',
    optional: '-',
    default: '-',
  },
  {
    name: 'index',
    instructions: '展示图片索引',
    type: 'number',
    optional: '-',
    default: '0',
  },
]
</script>

<template>
  <ve-page id="ve-preview" :code="code" :stats="stats" :version="json.version" title="ve-preview 预览">
    <template #default>
      <ve-preview
          :list="['avatar.png']"></ve-preview>
    </template>
  </ve-page>
</template>

<style lang="scss" scoped>

</style>
