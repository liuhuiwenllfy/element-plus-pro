<script lang="ts" setup>
import VePage from '@/components/ve-page/index.vue'
import code from './index.md?raw'

const stats = [
  {
    name: 'is-show-back',
    instructions: '是否展示回到顶部按钮',
    type: 'boolean',
    optional: 'true-是；false-否',
    default: 'false',
  }
]

const slots = [
  {
    name: 'default',
    details: '扩展内容'
  }
]
</script>

<template>
  <ve-page id="ve-back-top" :_slots="slots" :code="code" :stats="stats" title="ve-back-top 回到顶部">
    <template #default>
    </template>
  </ve-page>
</template>

<style lang="scss" scoped>
</style>
