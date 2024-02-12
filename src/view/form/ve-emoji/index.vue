<script lang="ts" setup>
import VeIncident from '@/components/ve-incident/index.vue'
import {ref} from "vue";

const emoteDialogVisible = ref(false)

const handleEmoteOpen = () => {
  emoteDialogVisible.value = true
}
const _comment = ref('')
const handleEmoteClick = (val: string) => {
  _comment.value = _comment.value + val
}

const incident = [
  {
    name: 'change',
    instructions: '表情选择回调事件',
    callback: '表情字符串',
  },
]
</script>

<template>
  <div class="ve-cron">
    <h2>cron时间选择器</h2>
    <el-divider/>
    <h3>示例</h3>
    <div style="margin-bottom: 10px">
      <el-input v-model="_comment" style="width: 300px" type="textarea"></el-input>
    </div>
    <el-popover
        :width="476"
        placement="bottom"
        trigger="click">
      <ve-emoji @change="handleEmoteClick"/>
      <template #reference>
        <el-image src="/img/emote.png" style="cursor: pointer" @click="handleEmoteOpen"/>
      </template>
    </el-popover>
    <el-divider/>
    <h2>API</h2>
    <ve-incident :incident="incident"/>
    <h3>注意</h3>
    <p>该组件是基于element-plus开发，需要在此基础上使用。</p>
  </div>
</template>

<style lang="less" scoped>
.ve-cron {
  padding: 20px;
}
</style>
