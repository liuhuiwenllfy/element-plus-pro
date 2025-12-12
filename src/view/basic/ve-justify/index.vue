<script lang="ts" setup>
import VePage from "@/components/ve-page/index.vue";
import VeJustify from '@/components/ve-justify/index.vue'
import readme from './index.md?raw'
import json from '@/components/ve-justify/package.json'

const slots = [
  {
    name: 'left',
    details: '左侧区域'
  },
  {
    name: 'right',
    details: '右侧区域'
  },
]
</script>

<template>
  <ve-page :_slots="slots" :readme="readme" :json="json">
    <template #default>
      <ve-justify>
        <template #left>左侧区域</template>
        <template #right>右侧区域</template>
      </ve-justify>
    </template>
  </ve-page>
</template>

<style lang="scss" scoped>

</style>
