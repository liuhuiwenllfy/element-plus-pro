<script lang="ts" setup>
import VeIncident from '@/components/ve-page/ve-incident/index.vue'
import {ref} from "vue";
import VePage from '@/components/ve-page/index.vue'
import emote_png from '@/assets/img/emote.png'

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
  <div class="ve-emoji">
    <ve-page id="ve-emoji" pm-id="d92e9a85704872b0ab3a08a13b9a9eb0" title="emoji选择器">
      <template #default>
        <el-space alignment="end" direction="vertical">
          <el-input v-model="_comment" placeholder="请输入内容" style="width: 300px" type="textarea"></el-input>
          <el-popover
              :width="476"
              placement="bottom"
              trigger="click">
            <ve-emoji @change="handleEmoteClick"/>
            <template #reference>
              <el-image :src="<string>emote_png" style="cursor: pointer" @click="handleEmoteOpen"/>
            </template>
          </el-popover>
        </el-space>
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
</style>
