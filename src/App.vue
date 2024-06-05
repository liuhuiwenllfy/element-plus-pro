<script lang="ts" setup>
import {computed, reactive} from 'vue'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
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
    <router-view v-loading.fullscreen.lock="commonStore.fullscreenLoading"/>
    <el-backtop :bottom="100" :right="50"/>
  </el-config-provider>
</template>

<style lang="scss" scoped>

</style>
