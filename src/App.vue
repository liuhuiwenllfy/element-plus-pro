<script lang="ts" setup>
import {computed, reactive, watch} from 'vue'
import {useHead} from '@unhead/vue'
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
  if (html) {
    if (commonStore.dark) {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }
  }
}, {immediate: true})


watch(() => router.currentRoute.value.name, () => {
  commonStore.changeTabList(router.currentRoute.value.meta)
})

// SEO: dynamic head management based on route meta
const seoTitle = computed(() => {
  const meta = router.currentRoute.value.meta as Record<string, string>
  if (!meta) return 'Element Plus Pro'
  if (commonStore.locale === 'en') {
    return (meta.nameEn || meta.name || '') + ' - Element Plus Pro'
  }
  return (meta.name || '') + ' - Element Plus Pro'
})

useHead({
  title: seoTitle,
  meta: [
    {
      name: 'description',
      content: computed(() => {
        const meta = router.currentRoute.value.meta as Record<string, string>
        if (!meta) return ''
        if (commonStore.locale === 'en') {
          return meta.nameEn || meta.name || ''
        }
        return meta.name || ''
      })
    },
    {
      property: 'og:title',
      content: seoTitle
    },
    {
      property: 'og:url',
      content: computed(() => `https://epp.liulingfengyu.cn${router.currentRoute.value.fullPath}`)
    }
  ]
})
</script>

<template>
  <el-config-provider :button="config" :locale="locale" :size="commonStore.globalSize">
    <div v-loading.fullscreen.lock="commonStore.fullscreenLoading" class="page">
      <router-view/>
    </div>
  </el-config-provider>
</template>

<style lang="scss" scoped>
.page {
  width: 100%;
  height: 100%;
}
</style>
