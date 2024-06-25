<script lang="ts" setup>
import VeError200 from 've-error/200/index.vue'
import router from '@/router'
import {useCommonStore} from "@/pinia/common.ts";
import VePage from "@/components/ve-page/index.vue";
import code from './index.md?raw'

const back = () => {
  router.go(-1)
}

const commonStore = useCommonStore();

const stats = [
  {
    name: 'language',
    instructions: '国际化',
    type: 'string',
    optional: 'zhCn | en',
    default: 'zhCn',
  },
]

const incident = [
  {
    name: 'handle-back',
    instructions: '返回按钮回调',
    callback: '-',
  }
]
</script>

<template>
  <ve-page id="ve-error" :code="code" :incident="incident" :stats="stats" title="ve-error 成功页面">
    <template #default>
      <ve-error200 :language="commonStore.getLocale" @handle-back="back"/>
    </template>
  </ve-page>
</template>

<style lang="scss" scoped>

</style>
