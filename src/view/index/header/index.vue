<script lang="ts" setup>
import VeHeader from '@/components/ve-header/index.vue'
import {useCommonStore} from "@/pinia/common.ts";
import menuList from '@/api/json/menuList.json'
import router from "@/router";
import {computed, ref} from "vue";
import {useI18n} from "vue-i18n";
import {MenuInfoShowVo} from "@/components/ve-header/MenuInfoShowVo.ts";
import {UserDropdownItem} from "@/components/ve-header/UserDropdownItem.js";
const {t} = useI18n()

const commonStore = useCommonStore()

const userInfo = ref<UserDropdownItem[]>([
  {
    code: 'officialWebsite',
    name: t('message.officialWebsite'),
    icon: 'VeIconArrowUpRightFromSquareOutline'
  },
  {
    code: 'gitHub',
    name: 'GitHub',
    icon: 'VeIconArrowUpRightFromSquareOutline'
  },
  {
    code: 'gitee',
    name: 'Gitee',
    icon: 'VeIconArrowUpRightFromSquareOutline'
  }
])

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

const menu = ref<MenuInfoShowVo[]>(<any>menuList)

const darkMode = computed(() => commonStore.getDark)
const fullScreen = computed(() => commonStore.getFullScreen)
const globalSize = computed(() => commonStore.getGlobalSize)
const locale = computed(() => commonStore.getLocale)
const layout = computed(() => commonStore.getLayout)
const name = computed(() => commonStore.getName)
const newsNum = computed(() => commonStore.getNewsNum)
const sidebar = computed(() => commonStore.getSidebar)
</script>
<template>
  <ve-header
      :dark="darkMode"
      :defaultActive="<string>router.currentRoute.value.name"
      :fullScreen="fullScreen"
      :globalSize="globalSize"
      :language="locale"
      :layout="layout"
      :list="userInfo"
      :menu="menu"
      :name="name"
      :navigation="<string>getNavigation"
      :newsNum="newsNum"
      :sidebar="sidebar"
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
