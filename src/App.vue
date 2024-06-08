<script lang="ts" setup>
import {computed, reactive, watch} from 'vue'
// @ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// @ts-ignore
import en from 'element-plus/dist/locale/en.mjs'

import {useCommonStore} from "@/pinia/common.js";
import router from "@/router";

const config = reactive({
  autoInsertSpace: true
})
const commonStore = useCommonStore()
const locale = computed(() => {
  return commonStore.locale === 'zhCn' ? zhCn : en
})

const html = document.querySelector('html')
watch(() => commonStore.dark, () => {
  if (commonStore.dark) {
    html.classList.add('dark')
  } else {
    html.classList.remove('dark')
  }
}, {immediate: true})


watch(()=> router.currentRoute.value.name, ()=>{
  commonStore.changeTabList(router.currentRoute.value.meta)
})
</script>

<template>
  <el-config-provider :button="config" :locale="locale" :size="commonStore.globalSize">
    <div v-loading.fullscreen.lock="commonStore.fullscreenLoading" class="page">
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
