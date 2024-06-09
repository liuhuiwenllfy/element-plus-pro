<script lang="ts" setup>
import VePage from "@/components/ve-page/index.vue";
import VePagination from '@/components/ve-pagination/index.vue'
import VeIncident from "@/components/ve-page/ve-incident/index.vue";

const stats = [
  {
    name: 'current',
    instructions: '当前页',
    type: 'number',
    optional: '-',
    default: '1',
  },
  {
    name: 'page-size',
    instructions: '页大小',
    type: 'number',
    optional: '-',
    default: '10',
  },
  {
    name: 'total',
    instructions: '总条数',
    type: 'number',
    optional: '-',
    default: '0',
  },
]

const incident = [
  {
    name: 'handle-current-change',
    instructions: '当前页变更回调',
    callback: 'current',
  },
  {
    name: 'handle-size-change',
    instructions: '页大小变更回调',
    callback: 'page-size',
  },
]
</script>

<template>
  <ve-page id="ve-pagination" title="ve-pagination 分页">
    <template #default>
      <ve-pagination
          :current="2"
          :page-size="10"
          :total="100"
          @handle-current-change="console.log($event)"
          @handle-size-change="console.log($event)"/>
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
.custom-image {
  width: 300px;
  height: 150px;
  border-radius: 5px
}
</style>
