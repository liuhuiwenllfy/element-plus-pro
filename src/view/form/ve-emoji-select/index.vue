<script lang="ts" setup>
import {ref} from "vue";
import VePage from '@/components/ve-page/index.vue'
import VeEmojiSelect from '@/components/ve-emoji-select/index.vue'
import code from './index.md?raw'
import {ElInput} from "element-plus";

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

const slots = [
  {
    name: 'default',
    details: '触发操作区域'
  }
]
</script>

<template>
  <ve-page id="ve-emoji-select" :_slots="slots" :code="code" :incident="incident" title="ve-emoji-select emoji选择器">
    <template #default>
      <el-input v-model="_comment" placeholder="请输入内容"
                style="width: 300px; vertical-align: top; margin-right: 10px"
                type="textarea"></el-input>
      <ve-emoji-select @change="handleEmoteClick">
        <template #default>
          <el-button>选择</el-button>
        </template>
      </ve-emoji-select>
    </template>
  </ve-page>
</template>

<style lang="scss" scoped>
</style>
