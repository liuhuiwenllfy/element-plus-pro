<script lang="ts" setup>
import VePage from '@/components/ve-page/index.vue'
import VeFastNav from '@/components/ve-fast-nav/index.vue'
import {useCommonStore} from "@/pinia/common.ts";

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
    optional: 'zh-CN | en-US',
    default: 'zh-CN',
  },
]

const incident = [
  {
    name: 'handle-router',
    instructions: '路由切换回调',
    callback: 'tabList:name',
  },
]

const commonStore = useCommonStore();
</script>

<template>
  <ve-page id="ve-fast-nav" title="ve-fast-nav 快速导航">
    <template #default>
      <ve-fast-nav :tab-list="commonStore.getTabList" activeName="overview"/>
    </template>
    <template #api>
      <ve-stats :stats="stats"/>
      <ve-incident :incident="incident"/>
    </template>
    <template #warn>
      <p>该组件是基于element-plus开发，需要在此基础上使用。</p>
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
