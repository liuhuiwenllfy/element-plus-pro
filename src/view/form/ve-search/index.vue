<script lang="ts" setup>
import VeIncident from '@/components/ve-page/ve-incident/index.vue'
import VePage from '@/components/ve-page/index.vue'
import VeSearch from '@/components/ve-search/index.vue'

const stats = [
  {
    name: 'language',
    instructions: '国际化',
    type: 'string',
    optional: 'zhCN | en',
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
  <ve-page id="ve-search" title="ve-search 搜索">
    <template #default>
      <ve-search language="zhCn" val="标题党" @handle-click="console.log($event)"/>
    </template>
    <template #api>
      <ve-incident :incident="incident"/>
    </template>
    <template #warn>
      <p>该组件是基于element-plus开发，需要在此基础上使用。</p>
    </template>
  </ve-page>
</template>

<style lang="scss" scoped>
</style>
