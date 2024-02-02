<script lang="ts" setup>
import FluentSettings16Filled from '~icons/fluent/settings-16-filled'
import MaterialSymbolsPerson from '~icons/material-symbols/person'
import PhPassword from '~icons/ph/password'
import MaterialSymbolsHouse from '~icons/material-symbols/house'
import IonIosNotifications from '~icons/ion/ios-notifications'
import BasilLogoutSolid from '~icons/basil/logout-solid'

import UserInfo from '@/components/ve-management-framework/header/user/dialog/user-info/index.vue'
import Password from '@/components/ve-management-framework/header/user/dialog/password/index.vue'
import {useI18n} from 'vue-i18n'
import {useStore} from '@/vuex/store'
import {reactive, ref} from 'vue'
import {removeSession} from '@/assets/js/sessionStorageUtils'
import {useRouter} from 'vue-router'
import {resData} from '@/entity/res'
import {logout} from '@/api/result/login'
import {redirectLogin} from "@/assets/js/common";

const store = useStore()
const { t } = useI18n()
const data = reactive({
  userInfoDrawer: false,
  passWordDrawer: false
})

const passwordDialogVisible = ref(false)

const userInfoDialogVisible = ref(false)

const router = useRouter()
const toTenant = () => {
  removeSession('tenant')
  store.commit('menuData', [])
  store.commit('tabList', [
    {
      title: '工作台',
      titleEn: 'Workbench',
      name: 'workbench',
      menuIcon: 'Odometer'
    }
  ])
  router.replace('tenant')
}
const signOut = async () => {
  const res = <resData>await logout()
  if (res.ok) {
    redirectLogin()
    store.commit('menuData', [])
    store.commit('tabList', [
      {
        title: '工作台',
        titleEn: 'Workbench',
        name: 'workbench',
        menuIcon: 'Odometer'
      }
    ])
    router.replace('login').catch()
  }
}

const click = () => {
  store.commit('drawerNews', true)
}
</script>

<template>
  <el-tooltip
      :content="$t('message.globalSettings')"
      effect="dark"
      placement="bottom-end">
    <el-link
        :icon="FluentSettings16Filled"
        :underline="false"
        type="primary"
        @click="store.commit('drawer', true)"/>
  </el-tooltip>
  <el-tooltip
      :content="$t('message.personalCenter')"
      effect="dark"
      placement="bottom-end">
    <el-link
        :icon="MaterialSymbolsPerson"
        :underline="false"
        type="primary"
        @click="userInfoDialogVisible = true"/>
  </el-tooltip>
  <el-tooltip
      :content="$t('message.modifyThePassword')"
      effect="dark"
      placement="bottom-end">
    <el-link
        :icon="PhPassword"
        :underline="false"
        type="primary"
        @click="passwordDialogVisible = true"/>
  </el-tooltip>
  <el-tooltip
      :content="$t('message.toTenant')"
      effect="dark"
      placement="bottom-end">
    <el-link
        :icon="MaterialSymbolsHouse"
        :underline="false"
        type="primary"
        @click="toTenant"/>
  </el-tooltip>
  <el-tooltip
      :content="$t('message.informationCenter')"
      effect="dark"
      placement="bottom-end">

    <el-link
        :underline="false"
        type="primary"
        @click="click">
      <el-badge :is-dot="store.state.isNews" style="height: 25px">
        <el-icon>
          <IonIosNotifications/>
        </el-icon>
      </el-badge>
    </el-link>
  </el-tooltip>
  <el-tooltip
      :content="$t('message.logout')"
      effect="dark"
      placement="bottom-end">
    <el-link
        :icon="BasilLogoutSolid"
        :underline="false"
        type="primary"
        @click="signOut"/>
  </el-tooltip>
  <UserInfo :dialogVisible="userInfoDialogVisible" @closed="userInfoDialogVisible = false"/>
  <Password :dialogVisible="passwordDialogVisible" @closed="passwordDialogVisible = false"/>
</template>

<style lang="less" scoped>
.el-link {
  font-size: 25px;
  margin-right: 10px;
}
</style>
