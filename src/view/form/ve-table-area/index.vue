<script lang="ts" setup>
import VePage from '@/components/ve-page/index.vue'
import VeTableArea from '@/components/ve-table-area/index.vue'
import code from './index.md?raw'

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]

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
  <ve-page id="ve-table-area" :_slots="slots" :code="code" :stats="stats" title="ve-table-area 表格区域">
    <template #default>
      <ve-table-area language="zhCn">
        <template #header>
          <el-button>新增</el-button>
        </template>
        <template #main>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column label="Date" prop="date" width="180"/>
            <el-table-column label="Name" prop="name" width="180"/>
            <el-table-column label="Address" prop="address"/>
          </el-table>
        </template>
      </ve-table-area>
    </template>
  </ve-page>
</template>

<style lang="scss" scoped>
</style>
