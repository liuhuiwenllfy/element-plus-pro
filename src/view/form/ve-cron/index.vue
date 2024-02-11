<script lang="ts" setup>

import {ref} from "vue";

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
    <h4>属性</h4>
    <el-table :data="stats" style="width: 100%">
      <el-table-column label="属性名" prop="name" width="180"/>
      <el-table-column label="说明" prop="instructions" width="180"/>
      <el-table-column label="类型" prop="type"/>
      <el-table-column label="可选值" prop="optional"/>
      <el-table-column label="默认值" prop="default"/>
    </el-table>
    <h4>事件</h4>
    <el-table :data="incident" style="width: 100%">
      <el-table-column label="事件名" prop="name" width="180"/>
      <el-table-column label="说明" prop="instructions" width="180"/>
      <el-table-column label="回调参数" prop="callback"/>
    </el-table>
    <h4>注意</h4>
    <p>该组件是基于element-plus开发，需要在此基础上使用。</p>
  </div>
</template>

<style lang="less" scoped>
.ve-cron {
  padding: 20px;
}
</style>
