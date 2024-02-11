<script lang="ts" setup>
import FluentSettings16Filled from '~icons/fluent/settings-16-filled'

import {useI18n} from 'vue-i18n'
import {useStore} from '@/vuex/store'
import {reactive, ref} from 'vue'
import {removeSession} from '@/assets/js/sessionStorageUtils'
import {useRouter} from 'vue-router'

const store = useStore()
const {t} = useI18n()
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
</template>

<style lang="less" scoped>
.el-link {
  font-size: 25px;
  margin-right: 10px;
}
</style>
