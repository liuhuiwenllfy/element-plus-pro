<script lang="ts" setup>

import {useCommonStore} from "@/pinia/common.ts";
import {useI18n} from "vue-i18n";

const {t} = useI18n()

const commonStore = useCommonStore();

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
</script>

<template>
  <el-tooltip
      :content="t('message.setting')"
      effect="dark"
      placement="bottom-end">
    <el-link
        :underline="false"
        icon="Setting"
        type="primary"
        @click="commonStore.changeDrawer(true)"/>
  </el-tooltip>
  <el-tooltip
      :content="t('message.officialWebsite')"
      effect="dark"
      placement="bottom-end">
    <el-link
        :underline="false"
        icon="Setting"
        type="primary"
        @click="handleUserClick('officialWebsite')"/>
  </el-tooltip>
  <el-tooltip
      content="GitHub"
      effect="dark"
      placement="bottom-end">
    <el-link
        :underline="false"
        icon="Setting"
        type="primary"
        @click="handleUserClick('gitHub')"/>
  </el-tooltip>
  <el-tooltip
      content="Gitee"
      effect="dark"
      placement="bottom-end">
    <el-link
        :underline="false"
        icon="Setting"
        type="primary"
        @click="handleUserClick('gitee')"/>
  </el-tooltip>
  <el-tooltip
      :content="t('message.logout')"
      effect="dark"
      placement="bottom-end">
    <el-link
        :underline="false"
        icon="Back"
        type="primary"/>
  </el-tooltip>
</template>

<style lang="scss" scoped>
.el-link {
  font-size: 25px;
  margin-right: 10px;
}
</style>
