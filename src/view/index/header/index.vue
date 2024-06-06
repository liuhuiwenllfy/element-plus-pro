<script lang="ts" setup>
import VeHeader from 've-header/index.vue'
import {useCommonStore} from "@/pinia/common.ts";
import menuList from '@/api/json/menuList.json'
import router from "@/router";
import {computed} from "vue";

const commonStore = useCommonStore()

const userInfo = [
  {
    code: 'userInfo',
    name: '个人中心',
    icon: 'User'
  }
]

const handleSignOutClick = () => {
  console.log("登出")
}

const handleUserClick = (code) => {
  switch (code) {
    case 'userInfo':
      console.log(userInfo)
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
      :defaultActive="commonStore.getDefaultActive"
      :drawerNews="commonStore.getDrawerNews"
      :fullScreen="commonStore.getFullScreen"
      :globalSize="commonStore.getGlobalSize"
      :language="commonStore.getLocale"
      :layout="commonStore.getLayout"
      :list="userInfo"
      :menu="menuList"
      :name="commonStore.getName"
      :navigation="getNavigation"
      :newsNum="commonStore.getNewsNum"
      :sidebar="commonStore.getSidebar"
      avatar="default.png"
      logo="logo.png"
      tenantName="刘凌枫羽工作室" username="element-plus-pro"
      @handle-default-active-change="commonStore.changeDefaultActive($event)"
      @handle-night-change="commonStore.changDark($event)"
      @handle-collapse-change="commonStore.changeSidebar($event)"
      @handle-full-screen-change="commonStore.changeFullScreen($event)"
      @handle-global-size-change="commonStore.changeGlobalSize($event)"
      @handle-language-change="commonStore.changeLocale($event)"
      @handle-news-change="commonStore.changeDrawerNews($event)"
      @handle-sign-out="handleSignOutClick"
      @handle-user-click="handleUserClick"
      @handle-global-setting-click="commonStore.changeDrawer($event)"
  />
</template>

<style lang="scss" scoped>

</style>
