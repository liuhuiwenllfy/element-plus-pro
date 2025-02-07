<script lang="ts" setup>
import VePage from "@/components/ve-page/index.vue";
import VeLogo from '@/components/ve-logo/index.vue'
import code from './index.md?raw'
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
  <ve-page id="ve-logo" :code="code" :stats="stats" :version="json.version" title="ve-logo Logo">
    <template #default>
      <ve-logo logo="logo.png" name="CodeEase"/>
    </template>
  </ve-page>
</template>

<style lang="scss" scoped>

</style>
