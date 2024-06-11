<script lang="ts" setup>
import VePage from "@/components/ve-page/index.vue";
import VeDefaultLogin from '@/components/ve-login/ve-default-login/index.vue'
import VeUserInfo from '@/components/ve-login/ve-user-info/index.vue'
import VeStats from "@/components/ve-page/ve-stats/index.vue";
import VeIncident from "@/components/ve-page/ve-incident/index.vue";

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
    optional: 'zh-CN | en-US',
    default: 'zh-CN',
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
  <ve-page id="ve-login" title="ve-login 登录">
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

</style>
