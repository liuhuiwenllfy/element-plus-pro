<script lang="ts" setup>
import VePage from "@/components/ve-page/index.vue";
import VePreview from '@/components/ve-preview/index.vue'
import readme from './index.md?raw'
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
  <ve-page :readme="readme" :stats="stats" :json="json">
    <template #default>
      <ve-preview
          :list="['avatar.png']"></ve-preview>
    </template>
  </ve-page>
</template>

<style lang="scss" scoped>

</style>
