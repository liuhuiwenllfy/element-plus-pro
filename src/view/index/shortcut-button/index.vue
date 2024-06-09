<script lang="ts" setup>

import {useRouter} from 'vue-router'
import {useCommonStore} from "@/pinia/common.ts";

const router = useRouter()


const commonStore = useCommonStore();
</script>

<template>
  <el-tooltip
      :content="$t('message.setting')"
      effect="dark"
      placement="bottom-end">
    <el-link
        :underline="false"
        icon="Setting"
        type="primary"
        @click="commonStore.changeDrawer(true)"/>
  </el-tooltip>
  <el-tooltip
      :content="$t('message.personalCenter')"
      effect="dark"
      placement="bottom-end">
    <el-link
        :underline="false"
        icon="User"
        type="primary"/>
  </el-tooltip>
  <el-tooltip
      :content="$t('message.modifyThePassword')"
      effect="dark"
      placement="bottom-end">
    <el-link
        :underline="false"
        icon="Lock"
        type="primary"/>
  </el-tooltip>
  <el-tooltip
      :content="$t('message.toTenant')"
      effect="dark"
      placement="bottom-end">
    <el-link
        :underline="false"
        icon="House"
        type="primary"/>
  </el-tooltip>
  <el-tooltip
      :content="$t('message.informationCenter')"
      effect="dark"
      placement="bottom-end">
    <el-link
        :underline="false"
        type="primary">
      <el-badge :hidden="commonStore.newsNum  === 0" :value="commonStore.newsNum" style="height: 25px">
        <el-icon>
          <Bell/>
        </el-icon>
      </el-badge>
    </el-link>
  </el-tooltip>
  <el-tooltip
      :content="$t('message.logout')"
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
