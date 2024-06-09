<script lang="ts" setup>
import VeIncident from '@/components/ve-page/ve-incident/index.vue'
import VePage from '@/components/ve-page/index.vue'
import VeSearchArea from '@/components/ve-search-area/index.vue'

const stats = [
  {
    name: 'open',
    instructions: '展开开关',
    type: 'boolean',
    optional: 'true-展开；false-收起',
    default: 'false',
  },
  {
    name: 'show',
    instructions: '是否显示展开按钮',
    type: 'boolean',
    optional: 'true-展开；false-收起',
    default: 'true',
  },
  {
    name: 'language',
    instructions: '国际化',
    type: 'string',
    optional: 'zhCN | en',
    default: 'zhCN',
  },
]

const incident = [
  {
    name: 'handle-click',
    instructions: '展开按钮回调',
    callback: 'open',
  },
]
</script>

<template>
  <ve-page id="ve-search-area" title="ve-search-area 搜索区域">
    <template #default>
      <ve-search-area
          :open="false"
          :show="true"
          language="zhCn"
          @handle-click="console.log($event)"/>
    </template>
    <template #api>
      <ve-stats :stats="stats"/>
      <ve-incident :incident="incident"/>
    </template>
    <template #warn>
      <p>该组件是基于element-plus开发，需要在此基础上使用。</p>
    </template>
  </ve-page>
</template>

<style lang="scss" scoped>
</style>
