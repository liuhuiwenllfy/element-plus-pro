<script lang="ts" setup>
import {ref} from "vue";
import VePage from '@/components/ve-page/index.vue'
import VeEmojiSelect from '@/components/ve-emoji-select/index.vue'
import code from './index.md?raw'

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
  <ve-page id="ve-emoji-select" :code="code" :incident="incident" title="ve-emoji-select emoji选择器">
    <template #default>
      <ve-emoji-select @change="handleEmoteClick"/>
    </template>
  </ve-page>
</template>

<style lang="scss" scoped>
</style>
