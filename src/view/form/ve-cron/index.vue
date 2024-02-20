<script lang="ts" setup>

import {ref} from "vue";
import VeIncident from "@/components/ve-page/ve-incident/index.vue";
import VePage from '@/components/ve-page/index.vue'

const _cron = ref("* * * * * ? *")
const handleChangeCron = (cron: string) => {
  _cron.value = cron
}
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
    <ve-page id="ve-cron" pm-id="c701a06b4a3661de4de69f5954df435b" title="cron时间选择器">
      <template #default>
        <el-input v-model="_cron" clearable
                  placeholder="请输入cron"
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

<style lang="less" scoped>
.ve-cron {

}
</style>
