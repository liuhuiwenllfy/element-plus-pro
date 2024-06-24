<script lang="ts" setup>
import VePage from "@/components/ve-page/index.vue";
import LayoutMini from '@/components/ve-layout/mini/index.vue'
import code from './index.md?raw'

const slots = [
  {
    name: 'headerArea',
    details: '头部区域'
  },
  {
    name: 'mainArea',
    details: '主要区域'
  },
  {
    name: 'asideArea',
    details: '侧边导航区域'
  },
  {
    name: 'footerArea',
    details: '底部区域'
  },
]
</script>

<template>
  <ve-page id="ve-layout" :_slots="slots" :code="code" title="ve-layout 布局">
    <template #default>
      <LayoutMini/>
    </template>
  </ve-page>
</template>

<style lang="scss" scoped>

</style>
