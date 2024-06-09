<script lang="ts" setup>
import VePage from "@/components/ve-page/index.vue";
import VeJustify from '@/components/ve-justify/index.vue'

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
  <ve-page id="ve-justify" title="ve-justify 左右分布">
    <template #default>
      <ve-justify>
        <template #left>左侧区域</template>
        <template #right>右侧区域</template>
      </ve-justify>
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
