<script lang="ts" setup>
import VePage from "@/components/ve-page/index.vue";
import VeTableColumn from '@/components/ve-table-column/index.vue'
import {computed, ref} from 'vue'
import VeIncident from "@/components/ve-page/ve-incident/index.vue";
import VeStats from "@/components/ve-page/ve-stats/index.vue";
import VeSlots from "@/components/ve-page/ve-slots/index.vue";
import {Delete, Edit} from "@element-plus/icons-vue";

const stats = [
  {
    name: 'tableHeight',
    instructions: '表格高度',
    type: 'number',
    optional: '-',
    default: '0',
  },
  {
    name: 'operationShow',
    instructions: '是否显示操作列',
    type: 'boolean',
    optional: 'true-显示；false-不显示',
    default: 'true',
  },
  {
    name: 'operationWidth',
    instructions: '操作列宽度',
    type: 'string',
    optional: '-',
    default: '262px',
  },
  {
    name: 'expand',
    instructions: '是否开启展列',
    type: 'boolean',
    optional: 'true-是；false-否',
    default: 'false',
  },
  {
    name: 'selection',
    instructions: '是否显示选择列',
    type: 'boolean',
    optional: 'true-是；false-否',
    default: 'false',
  },
  {
    name: 'index',
    instructions: '是否显示序号列',
    type: 'boolean',
    optional: 'true-是；false-否',
    default: 'false',
  },
  {
    name: 'columnList',
    instructions: '列集合',
    type: 'array',
    optional: '-',
    default: '[]',
  },
  {
    name: 'columnList:fixed',
    instructions: '固定列',
    type: 'boolean',
    optional: 'true-是；false-否',
    default: 'false',
  },
  {
    name: 'columnList:sortable',
    instructions: '是否显示排序',
    type: 'boolean',
    optional: 'true-是；false-否',
    default: 'false',
  },
  {
    name: 'columnList:prop',
    instructions: '列标识',
    type: 'string',
    optional: '-',
    default: '-',
  },
  {
    name: 'columnList:minWidth',
    instructions: '列最小宽度',
    type: 'number',
    optional: '-',
    default: '-',
  },
  {
    name: 'columnList:label',
    instructions: '列名称',
    type: 'string',
    optional: '-',
    default: '-',
  },
  {
    name: 'columnList:coverColumn',
    instructions: '是否为自定义列',
    type: 'boolean',
    optional: 'true-是；false-否',
    default: 'false',
  },
  {
    name: 'language',
    instructions: '国际化',
    type: 'string',
    optional: 'zh-CN | en-US',
    default: 'zh-CN',
  },
]

const slots = [
  {
    name: 'expand',
    details: '扩展列'
  },
  {
    name: 'columnList:coverColumn',
    details: '自定义列动态插槽'
  },
]

const incident = [
  {
    name: 'handle-full-screen',
    instructions: '全屏回调',
    callback: '-',
  },
  {
    name: 'refresh',
    instructions: '总线监听刷新回调',
    callback: '-',
  }
]

const columnList = computed(() => [
  {
    fixed: true,
    sortable: true,
    prop: 'column1',
    minWidth: '200',
    label: '列1'
  },
  {
    sortable: true,
    prop: 'column2',
    minWidth: '200',
    label: '列2'
  },
  {
    sortable: true,
    prop: 'column3',
    minWidth: '200',
    label: '列3'
  },
  {
    sortable: true,
    prop: 'column4',
    minWidth: '200',
    label: '列4'
  },
  {
    sortable: true,
    prop: 'column5',
    minWidth: '200',
    label: '列5'
  },
])

const _data = ref([
  {
    column1: 'column1',
    column2: 'column2',
    column3: 'column3',
    column4: 'column4',
    column5: 'column5',
  },
  {
    column1: 'column1',
    column2: 'column2',
    column3: 'column3',
    column4: 'column4',
    column5: 'column5',
  },
  {
    column1: 'column1',
    column2: 'column2',
    column3: 'column3',
    column4: 'column4',
    column5: 'column5',
  },
  {
    column1: 'column1',
    column2: 'column2',
    column3: 'column3',
    column4: 'column4',
    column5: 'column5',
  },
  {
    column1: 'column1',
    column2: 'column2',
    column3: 'column3',
    column4: 'column4',
    column5: 'column5',
  },
])
</script>

<template>
  <ve-page id="ve-table-column" title="ve-table-column 表格区域">
    <template #default>
      <el-table ref="ve-table" :data="_data">
        <ve-table-column :column-list="columnList">
          <template #default="scope">
            <el-button
                :icon="Document"
                plain
                size="small">
              详情
            </el-button>
            <el-button
                :icon="Edit"
                plain
                size="small"
                type="primary">
              编辑
            </el-button>
            <el-button
                :icon="Delete"
                plain
                size="small"
                type="danger">
              删除
            </el-button>
          </template>
        </ve-table-column>
      </el-table>
    </template>
    <template #api>
      <ve-stats :stats="stats"/>
      <ve-incident :incident="incident"/>
      <ve-slots :slots="slots"/>
    </template>
    <template #warn>
      <p>该组件是基于element-plus开发，需要在此基础上使用。</p>
    </template>
  </ve-page>
</template>

<style lang="scss" scoped>

</style>
