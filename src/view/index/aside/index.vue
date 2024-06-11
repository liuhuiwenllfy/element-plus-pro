<script lang="ts" setup>
import VeAside from '@/components/ve-aside/index.vue'
import menuList from '@/api/json/menuList.json'
import {useCommonStore} from "@/pinia/common.ts";
import router from "@/router";

const commonStore = useCommonStore()

</script>

<template>
  <ve-aside
      :default-active="<string> router.currentRoute.value.name"
      :language="commonStore.getLocale"
      :layout="commonStore.getLayout"
      :menu="<any>menuList"
      :name="commonStore.getName"
      :sidebar="commonStore.getSidebar"
      logo="logo.png"
      @handle-active-change="(index) => router.push({name: index})"
      @handle-show="commonStore.changeSidebar(false)"
  >
  </ve-aside>
</template>

<style lang="scss" scoped>
.el-icon {
  font-size: 20px;
}
</style>
