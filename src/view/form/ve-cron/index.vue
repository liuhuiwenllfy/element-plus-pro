<script lang="ts" setup>

import {ref} from "vue";
import VeIncident from "@/components/ve-page/ve-incident/index.vue";
import VePage from '@/components/ve-page/index.vue'
import VeCronSelect from '@/components/ve-cron-select/index.vue'

const _cron = ref("* * * * * ? *")

const incident = [
  {
    name: 'change',
    instructions: 'cron变更回调事件',
    callback: 'cron字符串',
  },
]
</script>

<template>
  <div class="ve-cron">
    <ve-page id="ve-cron" title="cron时间选择器">
      <template #default>
          <ve-cron-select :cron="_cron" style="margin: 20px" @change="(e)=> {console.log(e)}"/>
      </template>
      <template #api>
        <ve-incident :incident="incident"/>
      </template>
      <template #warn>
        <p>该组件是基于element-plus开发，需要在此基础上使用。</p>
      </template>
    </ve-page>
  </div>
</template>

<style lang="scss" scoped>
.ve-cron {

}
</style>
