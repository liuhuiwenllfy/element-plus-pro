<script setup lang="ts">

import json from "@/components/ve-data-loading/package.json";
import VePage from "@/components/ve-page/index.vue";
import readme from './index.md?raw'
import VeDataLoading from '@/components/ve-data-loading/index.vue'
import {ref} from 'vue'

const stats = [
  {
    name: 'size',
    instructions: '数据条数',
    type: 'number',
    optional: '-',
    default: '-',
  },
  {
    name: 'skeletonShow',
    instructions: '骨架是否显示',
    type: 'boolean',
    optional: 'true-显示；false-不显示',
    default: 'false',
  },
  {
    name: 'loadMoreShow',
    instructions: '是否加载完成',
    type: 'boolean',
    optional: 'true-显示到底了；false-显示加载更多按钮',
    default: 'false',
  },
  {
    name: 'hiddenLoad',
    instructions: '是否显示加载更多按钮或者到底了',
    type: 'boolean',
    optional: 'true-显示；false-不显示',
    default: 'false',
  },
  {
    name: 'rows',
    instructions: '骨架行数',
    type: 'number',
    optional: '-',
    default: '5',
  },
  {
    name: 'language',
    instructions: '国际化',
    type: 'string',
    optional: 'zhCN，en',
    default: 'zhCN',
  },
]

const incident = [
  {
    name: 'loadMore',
    instructions: '加载更多按钮回调',
    callback: '-',
  },
]

const size = ref(9)

const currentTotal = ref(3)

const loadMoreShow = ref(true)

const skeletonShow = ref(false)

const loadMore = async () => {
  skeletonShow.value = true
  setTimeout(() => {
    currentTotal.value += 3
    skeletonShow.value = false
    loadMoreShow.value = currentTotal.value < size.value
  }, 500)
}
</script>

<template>
  <ve-page :readme="readme" :incident="incident" :stats="stats" :json="json">
    <template #default>
      <p v-for="item in currentTotal" :key="item" class="scrollbar-demo-item">{{ item }}</p>
      <ve-data-loading
          :load-more-show="loadMoreShow"
          :size="size"
          :skeleton-show="skeletonShow"
          @load-more="loadMore"/>
    </template>
  </ve-page>
</template>

<style scoped lang="scss">
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}
</style>