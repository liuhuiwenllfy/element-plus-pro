<script lang="ts" setup>
import VePage from '@/components/ve-page/index.vue'
import VeTableArea from '@/components/ve-table-area/index.vue'
import VeStats from "@/components/ve-page/ve-stats/index.vue";
import VeSlots from "@/components/ve-page/ve-slots/index.vue";

const stats = [
  {
    name: 'language',
    instructions: '国际化',
    type: 'string',
    optional: 'zhCN | en',
    default: 'zhCN',
  },
]

const slots = [
  {
    name: 'header',
    details: '头部区域'
  },
  {
    name: 'main',
    details: '主要区域'
  }
]
</script>

<template>
  <ve-page id="ve-table-area" title="ve-table-area 表格区域">
    <template #default>
      <ve-table-area language="zhCn">
        <template #header>
          <el-button>新增</el-button>
        </template>
        <template #main>
          <el-table>

          </el-table>
        </template>
      </ve-table-area>
    </template>
    <template #api>
      <ve-stats :stats="stats"/>
      <ve-slots :slots="slots"/>
    </template>
    <template #warn>
      <p>该组件是基于element-plus开发，需要在此基础上使用。</p>
    </template>
  </ve-page>
</template>

<style lang="scss" scoped>
</style>
