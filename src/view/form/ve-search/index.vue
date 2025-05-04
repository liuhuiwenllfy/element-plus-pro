<script lang="ts" setup>
import VePage from '@/components/ve-page/index.vue'
import VeSearch from '@/components/ve-search/index.vue'
import code from './index.md?raw'
import json from '@/components/ve-search/package.json'

const stats = [
  {
    name: 'language',
    instructions: '国际化',
    type: 'string',
    optional: 'zhCN，en',
    default: 'zhCN',
  },
  {
    name: 'val',
    instructions: '内容',
    type: 'string',
    optional: '-',
    default: '-',
  },
]

const incident = [
  {
    name: 'handle-click',
    instructions: '搜索回调',
    callback: 'val',
  },
]
</script>

<template>
  <ve-page id="ve-search" :code="code" :incident="incident" :stats="stats" :version="json.version"
           title="ve-search 搜索">
    <template #default>
      <ve-search language="zhCn" val="标题党" @handle-click="console.log($event)"/>
    </template>
  </ve-page>
</template>

<style lang="scss" scoped>
</style>
