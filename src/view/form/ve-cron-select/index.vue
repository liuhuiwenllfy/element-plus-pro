<script lang="ts" setup>

import {ref} from "vue";
import VePage from '@/components/ve-page/index.vue'
import VeCronSelect from '@/components/ve-cron-select/index.vue'
import code from './index.md?raw'
import json from '@/components/ve-cron-select/package.json'

const _cron = ref("* * * * * ? *")

const stats = [
  {
    name: 'cron',
    instructions: '时间',
    type: 'string',
    optional: '-',
    default: '-',
  },
]

const incident = [
  {
    name: 'change',
    instructions: 'cron变更回调事件',
    callback: 'cron字符串',
  },
]
</script>

<template>
  <ve-page id="ve-cron-select" :code="code" :incident="incident" :stats="stats" :version="json.version"
           title="ve-cron-select cron时间选择器">
    <template #default>
      <ve-cron-select :cron="_cron" style="margin: 20px" @change="(e)=> {console.log(e)}"/>
    </template>
  </ve-page>
</template>

<style lang="scss" scoped>

</style>
