<script lang="ts" setup>
import VePage from "@/components/ve-page/index.vue";
import VePreview from '@/components/ve-preview/index.vue'
import VeStats from "@/components/ve-page/ve-stats/index.vue";

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
          :list="['avatar.png']"></ve-preview>
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
