<script lang="ts" setup>
import VeError401 from 've-error/401/index.vue'
import router from '@/router'
import {useCommonStore} from "@/pinia/common.ts";
import VePage from "@/components/ve-page/index.vue";
import code from './index.md?raw'
import json from '@/components/ve-error/package.json'

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
  <ve-page id="ve-error" :code="code" :incident="incident" :stats="stats" :version="json.version"
           title="ve-error 凭证无效页面">
    <template #default>
      <ve-error401 :language="commonStore.getLocale" @handle-back="back"/>
    </template>
  </ve-page>
</template>

<style lang="scss" scoped>

</style>
