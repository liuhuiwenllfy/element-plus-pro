<script lang="ts" setup>
import VeHeader from '@/components/ve-header/index.vue'
import {useCommonStore} from "@/pinia/common.ts";
import menuList from '@/api/json/menuList.json'
import router from "@/router";
import {computed} from "vue";
import {useI18n} from "vue-i18n";

const {t} = useI18n()

const commonStore = useCommonStore()

const userInfo = [
  {
    code: 'officialWebsite',
    name: t('message.officialWebsite'),
    icon: 'Promotion'
  },
  {
    code: 'gitHub',
    name: 'GitHub',
    icon: 'Promotion'
  },
  {
    code: 'gitee',
    name: 'Gitee',
    icon: 'Promotion'
  }
]

const handleSignOutClick = () => {
  console.log("登出")
}

const handleUserClick = (code: string) => {
  switch (code) {
    case 'officialWebsite':
      window.open('https://www.liulingfengyu.cn')
      break
    case 'gitHub':
      window.open('https://github.com/liuhuiwenllfy/element-plus-pro')
      break
    case 'gitee':
      window.open('https://gitee.com/liu-ling-feng-yu/element-plus-pro')
      break
  }
}

const getNavigation = computed(() => {
  return commonStore.getLocale === 'zhCn' ? router.currentRoute.value.meta.name : router.currentRoute.value.meta.nameEn
})
</script>
<template>
  <ve-header
      :dark="commonStore.getDark"
      :defaultActive="<string>router.currentRoute.value.name"
      :fullScreen="commonStore.getFullScreen"
      :globalSize="commonStore.getGlobalSize"
      :language="commonStore.getLocale"
      :layout="commonStore.getLayout"
      :list="userInfo"
      :menu="<any>menuList"
      :name="commonStore.getName"
      :navigation="<string>getNavigation"
      :newsNum="commonStore.getNewsNum"
      :sidebar="commonStore.getSidebar"
      avatar="avatar.png"
      logo="logo.png"
      tenantName="刘凌枫羽工作室" username="element-plus-pro"
      @handle-night-change="commonStore.changeDark($event)"
      @handle-collapse-change="commonStore.changeSidebar($event)"
      @handle-full-screen-change="commonStore.changeFullScreen($event)"
      @handle-global-size-change="commonStore.changeGlobalSize($event)"
      @handle-language-change="commonStore.changeLocale($event)"
      @handle-news-change="commonStore.changeDrawerNews(true)"
      @handle-sign-out="handleSignOutClick"
      @handle-user-click="handleUserClick"
      @handle-global-setting-click="commonStore.changeDrawer(true)"
  />
</template>

<style lang="scss" scoped>

</style>
