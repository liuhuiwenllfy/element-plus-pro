<script lang="ts" setup>
import VePage from "@/components/ve-page/index.vue";
import VePreview from '@/components/ve-preview/index.vue'

const stats = [
  {
    name: 'list',
    instructions: '图片集合',
    type: 'string',
    optional: '-',
    default: '-',
  },
]
</script>

<template>
  <ve-page id="ve-preview" title="ve-preview 预览">
    <template #default>
      <ve-preview
          :list="['https://inews.gtimg.com/om_bt/OHyQqgC_5oi4Vm0tlH49XvJzqNBHo2Zryxx5F_be5N2cIAA/1000']"></ve-preview>
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
