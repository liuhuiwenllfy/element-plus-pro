<script lang="ts" setup>
import VePage from '@/components/ve-page/index.vue'
import VeHeaderPortal from '@/components/ve-header-portal/index.vue'
import {useCommonStore} from "@/pinia/common.ts";
import {computed, reactive} from 'vue'
import code from './index.md?raw'
import VeSearch from '@/components/ve-search/index.vue'

const stats = [

  {
    name: 'menu:name',
    instructions: '菜单名称',
    type: 'string',
    optional: '-',
    default: '-',
  },
  {
    name: 'menu:describe',
    instructions: '菜单描述',
    type: 'string',
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
    optional: 'zhCn | en',
    default: 'zhCn',
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
    name: 'handle-menu-click',
    instructions: '菜单点击回调',
    callback: 'menu:route',
  },
  {
    name: 'handle-night-change',
    instructions: '夜间模式变更回调',
    callback: 'true-开启，false-关闭',
  },
  {
    name: 'handle-language-change',
    instructions: '语言切换回调',
    callback: 'language：zhCn | en',
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
    name: 'handle-login',
    instructions: '登录回调',
    callback: '-',
  },
  {
    name: 'handle-register',
    instructions: '注册回调',
    callback: '-',
  }
]
const commonStore = useCommonStore()

const userInfo = computed(() => {
  return reactive([
    {
      code: 'userInfo',
      name: '个人中心',
      icon: 'User'
    }
  ])
})

const menu = computed(() => {
  return reactive([
    {
      name: '产品',
      children: [
        {
          name: '产品1',
          describe: '产品描述',
          route: '#'
        },
        {
          name: '产品2',
          describe: '产品描述',
          route: '#'
        },
      ]
    },
    {
      name: '解决方案',
      route: '#'
    },
  ])
})
</script>

<template>
  <ve-page id="ve-header" :code="code" :incident="incident" :stats="stats" title="ve-header 头部导航">
    <template #default>
      <ve-header-portal
          :dark="commonStore.getDark"
          :language="commonStore.getLocale"
          :list="userInfo"
          :menu="menu"
          :name="commonStore.getName"
          :newsNum="commonStore.getNewsNum"
          avatar="avatar.png"
          logo="logo.png"
          @handle-menu-click="console.log($event)"
          @handle-logo-click="console.log('home')"
          @handle-night-change="commonStore.changeDark($event)"
          @handle-language-change="commonStore.changeLocale($event)"
          @handle-sign-out="console.log('登出')"
          @handle-user-click="console.log($event)"
          @handle-login="console.log('登录')"
          @handle-register="console.log('注册')">
        <template #search>
          <ve-search language="zhCn" val="标题党" @handle-click="console.log($event)"/>
        </template>
      </ve-header-portal>
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
