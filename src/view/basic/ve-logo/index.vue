<script lang="ts" setup>
import VePage from "@/components/ve-page/index.vue";
import VeLogo from '@/components/ve-logo/index.vue'

const stats = [
  {
    name: 'logo',
    instructions: '头像',
    type: 'string',
    optional: '-',
    default: '-',
  },
  {
    name: 'name',
    instructions: '名称',
    type: 'string',
    optional: '-',
    default: '-',
  },
]
</script>

<template>
  <ve-page id="ve-logo" title="ve-logo Logo">
    <template #default>
      <ve-logo logo="logo.png" name="CodeEase"/>
    </template>
    <template #api>
      <ve-stats :stats="stats"/>
    </template>
    <template #warn>
      <p>该组件是基于element-plus开发，需要在此基础上使用。</p>
    </template>
  </ve-page>
</template>

<style lang="scss" scoped>

</style>
