<script lang="ts" setup>
import VePage from "@/components/ve-page/index.vue";
import VePagination from '@/components/ve-pagination/index.vue'
import readme from './index.md?raw'
import json from '@/components/ve-pagination/package.json'

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
  <ve-page :incident="incident" :json="json" :readme="readme" :stats="stats" class="ve-pagination">
    <template #default>
      <div class="main">
        <ve-pagination
            :current="2"
            :page-size="10"
            :total="100"
            @handle-current-change="console.log($event)"
            @handle-size-change="console.log($event)"/>
      </div>
    </template>
  </ve-page>
</template>

<style lang="scss" scoped>
.ve-pagination {
  .main {
    padding: 20px;
    border: $dashed;
  }
}
</style>
