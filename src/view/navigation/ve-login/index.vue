<script lang="ts" setup>
import VePage from "@/components/ve-page/index.vue";
import VeDefaultLogin from '@/components/ve-login/ve-default-login/index.vue'
import VeUserInfo from '@/components/ve-login/ve-user-info/index.vue'
import code from './index.md?raw'
import json from '@/components/ve-login/package.json'

const stats = [
  {
    name: 'avatar',
    instructions: '头像',
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
    name: 'handle-login',
    instructions: '登录回调',
    callback: '-',
  },
  {
    name: 'handle-register',
    instructions: '注册回调',
    callback: '-',
  },
  {
    name: 'handle-sign-out',
    instructions: '退出登录回调',
    callback: '-',
  },
  {
    name: 'handle-click',
    instructions: '用户展开项点击回调',
    callback: 'list:code',
  },
]
</script>

<template>
  <ve-page id="ve-login" :code="code" :incident="incident" :stats="stats" :version="json.version" title="ve-login 登录">
    <template #default>
      <ve-default-login avatar="avatar.png" @handle-login="console.log('登录')"
                        @handle-register="console.log('注册')"></ve-default-login>
      <el-divider/>
      <ve-user-info
          :list="[{
                    code:'userInfo',
                    name:'个人中心',
                    icon:'User'
                  }]"
          avatar="avatar.png"
          username="sysadmin"
          @handle-click="console.log($event)"
          @handle-sign-out="console.log('登出')"></ve-user-info>
    </template>
  </ve-page>
</template>

<style lang="scss" scoped>

</style>
