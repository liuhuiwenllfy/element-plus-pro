<script lang="ts" setup>

import {ref} from "vue";
import VePage from '@/components/ve-page/index.vue'
import VeCronSelect from '@/components/ve-cron-select/index.vue'
import readme from './index.md?raw'
import json from '@/components/ve-cron-select/package.json'

const _cron = ref("0/10 10 10 10 3 1 2024-2025")

const stats = [
  {
    name: 'cron',
    instructions: '时间',
    type: 'string',
    optional: '-',
    default: '* * * * * ?',
  },
]

const incident = [
  {
    name: 'change',
    instructions: 'cron变更回调事件',
    callback: 'cron字符串',
  },
]

const handleChange = (e: string) => {
  console.log(e)
}
</script>

<template>
  <ve-page :incident="incident" :json="json" :readme="readme" :stats="stats">
    <template #default>
      <ve-cron-select :cron="_cron" style="margin: 20px" @change="handleChange"/>
    </template>
  </ve-page>
</template>

<style lang="scss" scoped>

</style>
