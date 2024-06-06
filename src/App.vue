<script lang="ts" setup>
import {computed, reactive} from 'vue'
// @ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// @ts-ignore
import en from 'element-plus/dist/locale/en.mjs'

import {useCommonStore} from "@/pinia/common.js";

const config = reactive({
  autoInsertSpace: true
})
const commonStore = useCommonStore()
const locale = computed(() => {
  return commonStore.locale === 'zhCn' ? zhCn : en
})
</script>

<template>
  <el-config-provider :button="config" :locale="locale" :size="commonStore.globalSize">
    <div class="page" v-loading.fullscreen.lock="commonStore.fullscreenLoading">
      <router-view/>
    </div>
    <el-backtop :bottom="100" :right="50"/>
  </el-config-provider>
</template>

<style lang="scss" scoped>
.page {
  width: 100%;
  height: 100%;
}
</style>
