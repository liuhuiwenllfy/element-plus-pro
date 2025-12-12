<script lang="ts" setup>
import VePage from "@/components/ve-page/index.vue";
import VeLogo from '@/components/ve-logo/index.vue'
import readme from './index.md?raw'
import json from '@/components/ve-logo/package.json'

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
  <ve-page :readme="readme" :stats="stats" :json="json">
    <template #default>
      <ve-logo logo="logo.png" name="CodeEase"/>
    </template>
  </ve-page>
</template>

<style lang="scss" scoped>

</style>
