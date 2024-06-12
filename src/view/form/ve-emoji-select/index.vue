<script lang="ts" setup>
import VeIncident from '@/components/ve-page/ve-incident/index.vue'
import {ref} from "vue";
import VePage from '@/components/ve-page/index.vue'
import VeEmojiSelect from '@/components/ve-emoji-select/index.vue'

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
  <ve-page id="ve-emoji-select" title="ve-emoji-select emoji选择器">
    <template #default>
      <ve-emoji-select @change="handleEmoteClick"/>
    </template>
    <template #api>
      <ve-incident :incident="incident"/>
    </template>
    <template #warn>
      <p>该组件是基于element-plus开发，需要在此基础上使用。</p>
    </template>
  </ve-page>
</template>

<style lang="scss" scoped>
</style>
