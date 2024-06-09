<script lang="ts" setup>
import VePage from '@/components/ve-page/index.vue'
import VeAside from 've-aside/index.vue'
import menuList from '/src/api/json/menuList.json'

const stats = [
  {
    name: 'menu',
    instructions: '菜单树结构',
    type: 'array<MenuInfoShowVo>',
    optional: '-',
    default: '-',
  },
  {
    name: 'menu:id',
    instructions: '主键',
    type: 'string',
    optional: '-',
    default: '-',
  },
  {
    name: 'menu:menuCode',
    instructions: '菜单代码',
    type: 'string',
    optional: '-',
    default: '-',
  },
  {
    name: 'menu:menuName',
    instructions: '菜单名称',
    type: 'string',
    optional: '-',
    default: '-',
  },
  {
    name: 'menu:menuNameEn',
    instructions: '菜单英文名称',
    type: 'string',
    optional: '-',
    default: '-',
  },
  {
    name: 'menu:parentId',
    instructions: '父级id',
    type: 'string',
    optional: '-',
    default: '-',
  },
  {
    name: 'menu:menuLevel',
    instructions: '菜单等级',
    type: 'number',
    optional: '-',
    default: '-',
  },
  {
    name: 'menu:menuSort',
    instructions: '菜单排序',
    type: 'number',
    optional: '-',
    default: '-',
  },
  {
    name: 'menu:menuIcon',
    instructions: '菜单图标',
    type: 'string',
    optional: '-',
    default: '-',
  },
  {
    name: 'menu:menuPath',
    instructions: '菜单路径',
    type: 'string',
    optional: '-',
    default: '-',
  },
  {
    name: 'menu:isShow',
    instructions: '是否显示',
    type: 'boolean',
    optional: '-',
    default: '-',
  },
  {
    name: 'menu:children',
    instructions: '子集',
    type: 'string',
    optional: '-',
    default: '-',
  },
  {
    name: 'menu:menuComponent',
    instructions: '组件地址',
    type: 'string',
    optional: '-',
    default: '-',
  },
  {
    name: 'sidebar',
    instructions: '侧边栏展开收起开关',
    type: 'boolean',
    optional: 'false-展开；true-收起',
    default: 'false',
  },
  {
    name: 'defaultActive',
    instructions: '默认选中项',
    type: 'string',
    optional: '传入menu:menuCode值',
    default: 'false',
  },
  {
    name: 'layout',
    instructions: '布局',
    type: 'number',
    optional: '1，2，3，4，5，6，7',
    default: '7',
  },
  {
    name: 'language',
    instructions: '语言',
    type: 'string',
    optional: 'zhCn，en',
    default: 'zhCn',
  },
  {
    name: 'logo',
    instructions: 'logo地址',
    type: 'string',
    optional: '',
    default: '',
  },
  {
    name: 'name',
    instructions: '名称',
    type: 'string',
    optional: '',
    default: '',
  },
]

const incident = [
  {
    name: 'handle-active-change',
    instructions: '路由切换回调',
    callback: 'menu:menuCode',
  },
]
</script>

<template>
  <ve-page id="ve-aside" title="ve-aside 侧边导航">
    <template #default>
      <div class="aside-body">
        <ve-aside
            :layout="7"
            :menu="menuList"
            :sidebar="false"
            default-active="workbench"
            language="zhCn"
            logo="/logo.png"
            name="Demo"
            @handle-active-change="(index)=>{console.log(index)}"
        >
        </ve-aside>
      </div>
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
