<script lang="ts" setup>

import {ref} from "vue";
import VeIncident from "@/components/ve-incident/index.vue";

const _cron = ref("* * * * * ? *")
const handleChangeCron = (cron: string) => {
  _cron.value = cron
}

const stats = [
  {
    name: 'value',
    instructions: 'cron字符串',
    type: 'string',
    optional: '-',
    default: '* * * * * ? *',
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
  <div class="ve-cron">
    <h2>cron时间选择器</h2>
    <el-divider/>
    <h3>示例</h3>
    <el-input v-model="_cron" :placeholder="$t('message.enterParameter', {parameter: $t('message.cron')})"
              clearable
              style="width: 300px;">
      <template #append>
        <el-popover
            :width="476"
            placement="bottom"
            trigger="click">
          <ve-cron :value="_cron" @change="handleChangeCron"/>
          <template #reference>
            <div style="cursor: pointer">选择</div>
          </template>
        </el-popover>
      </template>
    </el-input>
    <el-divider/>
    <h2>API</h2>
    <ve-stats :stats="stats"/>
    <ve-incident :incident="incident"/>
    <h3>注意</h3>
    <p>该组件是基于element-plus开发，需要在此基础上使用。</p>
  </div>
</template>

<style lang="less" scoped>
.ve-cron {

}
</style>
