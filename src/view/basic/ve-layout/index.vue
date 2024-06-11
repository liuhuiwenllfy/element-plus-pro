<script lang="ts" setup>
import VePage from "@/components/ve-page/index.vue";
import LayoutMini from '@/components/ve-layout/mini/index.vue'
import VeSlots from "@/components/ve-page/ve-slots/index.vue";

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
  <ve-page id="ve-layout" title="ve-layout 布局">
    <template #default>
      <LayoutMini/>
    </template>
    <template #api>
      <ve-slots :slots="slots"/>
    </template>
    <template #warn>
      <p>该组件是基于element-plus开发，需要在此基础上使用。</p>
    </template>
  </ve-page>
</template>

<style lang="scss" scoped>

</style>
