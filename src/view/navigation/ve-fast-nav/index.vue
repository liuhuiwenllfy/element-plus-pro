<script lang="ts" setup>
import VePage from '@/components/ve-page/index.vue'
import readme from './index.md?raw'
import json from '@/components/ve-fast-nav/package.json'

const stats = [
  {
    name: 'tabList',
    instructions: '菜单集合',
    type: 'array<Tab>',
    optional: '-',
    default: '-',
  },
  {
    name: 'tabList:menuIcon',
    instructions: '菜单图标',
    type: 'string',
    optional: '-',
    default: '-',
  },
  {
    name: 'tabList:title',
    instructions: '菜单标题',
    type: 'string',
    optional: '-',
    default: '-',
  },
  {
    name: 'tabList:titleEn',
    instructions: '菜单英文标题',
    type: 'string',
    optional: '-',
    default: '-',
  },
  {
    name: 'tabList:name',
    instructions: '路由地址',
    type: 'string',
    optional: '-',
    default: '-',
  },
  {
    name: 'activeName',
    instructions: '选中项路由',
    type: 'string',
    optional: '-',
    default: '-',
  },
  {
    name: 'language',
    instructions: '国际化',
    type: 'string',
    optional: 'zhCn，en',
    default: 'zhCn',
  },
]

const incident = [
  {
    name: 'handle-router',
    instructions: '路由切换回调',
    callback: 'tabList:name',
  },
]

</script>

<template>
  <ve-page :readme="readme" :incident="incident" :stats="stats" :json="json">
    <template #default>
      <el-alert
          style="width: 300px"
          title="效果请参照页面顶部下方快速戴航。"
          type="primary"
          show-icon
          :closable="false"
      />
    </template>
  </ve-page>
</template>

<style lang="scss" scoped>
.aside-body {
  width: 260px;
  height: 100%;
  border: 1px solid var(--el-border-color);
}
</style>
