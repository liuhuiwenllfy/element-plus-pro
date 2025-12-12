<script lang="ts" setup>
import VePage from '@/components/ve-page/index.vue'
import readme from './index.md?raw'
import json from '@/components/ve-back-top/package.json'

const stats = [
  {
    name: 'is-show-back',
    instructions: '是否展示回到顶部按钮',
    type: 'boolean',
    optional: 'true-是；false-否',
    default: 'false',
  },
  {
    name: 'bottom',
    instructions: '距离底部的距离',
    type: 'String',
    optional: '-',
    default: '100px',
  },
  {
    name: 'right',
    instructions: '距离右侧的距离',
    type: 'String',
    optional: '-',
    default: '50px',
  },
]

const slots = [
  {
    name: 'default',
    details: '扩展内容'
  }
]
</script>

<template>
  <ve-page :_slots="slots" :readme="readme" :stats="stats" :json="json">
    <template #default>
      <el-alert
          style="width: 300px"
          title="效果请参照页面右下方回到顶部。"
          type="primary"
          show-icon
          :closable="false"
      />
    </template>
  </ve-page>
</template>

<style lang="scss" scoped>
</style>
