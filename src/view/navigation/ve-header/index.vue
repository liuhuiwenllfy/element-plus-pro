<script lang="ts" setup>
import VePage from '@/components/ve-page/index.vue'
import VeHeader from '@/components/ve-header/index.vue'
import menuList from '@/api/json/menuList.json'
import VeStats from "@/components/ve-page/ve-stats/index.vue";
import VeIncident from "@/components/ve-page/ve-incident/index.vue";

const stats = [

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
  {
    name: 'navigation',
    instructions: '面包屑导航',
    type: 'string',
    optional: '-',
    default: '-',
  },
  {
    name: 'tenantName',
    instructions: '租户名称',
    type: 'string',
    optional: '-',
    default: '-',
  },
  {
    name: 'drawerNews',
    instructions: '消息抽屉开关',
    type: 'boolean',
    optional: 'true-展开；false-收起',
    default: 'false',
  },
  {
    name: 'newsNum',
    instructions: '消息数量',
    type: 'number',
    optional: '-',
    default: '0',
  },
  {
    name: 'fullScreen',
    instructions: '全屏开关',
    type: 'boolean',
    optional: 'true-全屏；false-退出全屏',
    default: 'false',
  },
  {
    name: 'globalSize',
    instructions: '全局尺寸',
    type: 'string',
    optional: 'default | large | small',
    default: 'default',
  },
  {
    name: 'dark',
    instructions: '夜间模式开关',
    type: 'boolean',
    optional: 'true-开；false-关',
    default: 'false',
  },
  {
    name: 'language',
    instructions: '国际化',
    type: 'string',
    optional: 'zh-CN | en-US',
    default: 'zh-CN',
  },
  {
    name: 'avatar',
    instructions: '头像',
    type: 'string',
    optional: '-',
    default: '-',
  },
  {
    name: 'username',
    instructions: '用户名称',
    type: 'string',
    optional: '-',
    default: '-',
  },
  {
    name: 'list',
    instructions: '头像展开下拉内容',
    type: 'array<DropdownItem>',
    optional: '-',
    default: '-',
  },
  {
    name: 'list:code',
    instructions: '唯一标识',
    type: 'string',
    optional: '-',
    default: '-',
  },
  {
    name: 'list:name',
    instructions: '名称',
    type: 'string',
    optional: '-',
    default: '-',
  },
  {
    name: 'list:icon',
    instructions: '图标',
    type: 'string',
    optional: '-',
    default: '-',
  },
]

const incident = [
  {
    name: 'handle-default-active-change',
    instructions: '路由切换回调',
    callback: 'menu:menuCode',
  },
  {
    name: 'handle-night-change',
    instructions: '夜间模式变更回调',
    callback: 'true-开启，false-关闭',
  },
  {
    name: 'handle-collapse-change',
    instructions: '侧边栏开关回调',
    callback: 'true-开启，false-关闭',
  },
  {
    name: 'handle-full-screen-change',
    instructions: '全屏变更回调',
    callback: 'true-开启，false-关闭',
  },
  {
    name: 'handle-global-size-change',
    instructions: '全局尺寸变更回调',
    callback: 'size：default | large | small',
  },
  {
    name: 'handle-language-change',
    instructions: '语言切换回调',
    callback: 'language：zhCn | en',
  },
  {
    name: 'handle-news-change',
    instructions: '消息抽屉开关',
    callback: 'true-开启，false-关闭',
  },
  {
    name: 'handle-sign-out',
    instructions: '退出登录回调',
    callback: '-',
  },
  {
    name: 'handle-user-click',
    instructions: '用户展开项点击回调',
    callback: 'list:code',
  },
  {
    name: 'handle-global-setting-click',
    instructions: '全局设置点击回调',
    callback: '-',
  },
]

</script>

<template>
  <ve-page id="ve-header" title="ve-header 头部导航">
    <template #default>
      <ve-header
          :dark="false"
          :drawerNews="false"
          :fullScreen="false"
          :layout="7"
          :list="[{
              code:'userInfo',
              name:'个人中心',
              icon:'User'
            }]"
          :menu="<any>menuList"
          :newsNum="1"
          :sidebar="false"
          avatar="avatar.png"
          defaultActive="home"
          globalSize="default"
          language="en"
          logo="logo.png"
          name="CodeEase"
          navigation="工作台"
          tenantName="刘凌枫羽工作室" username="sysadmin"
          @handle-default-active-change="console.log($event)"
          @handle-night-change="console.log($event)"
          @handle-collapse-change="console.log($event)"
          @handle-full-screen-change="console.log($event)"
          @handle-global-size-change="console.log($event)"
          @handle-language-change="console.log($event)"
          @handle-news-change="console.log($event)"
          @handle-sign-out="console.log('登出')"
          @handle-user-click="console.log($event)"
          @handle-global-setting-click="console.log('全局设置')"
      />
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
