<!--
登录成功后显示用户信息（门户和插件市场专用）
-->
<script lang="ts" setup>
import CarbonUserProfile from '~icons/carbon/user-profile'
import CarbonPreviousOutline from '~icons/carbon/previous-outline'

import {onMounted, ref} from 'vue'
import {getSession, hasSession, removeSession} from '@/assets/js/sessionStorageUtils'
import {resData} from '@/entity/res'
import {logout} from '@/api/result/login'
import {useRouter} from 'vue-router'
import CarbonHome from '~icons/carbon/home'
import {store} from '@/vuex/store'
import {queryByUsername} from '@/api/result/user'
import {UserInfoClientVo} from '@/entity/vo/system/UserInfoClientVo'
import {redirectLogin, routerPushOfName, spliceMongodbUrl} from '@/assets/js/common'
import {Promotion} from "@element-plus/icons-vue";

const router = useRouter();

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
  const res = <resData>await logout();
  if (res.ok) {
    redirectLogin()
    await router.push({name: 'login'})
  }
}

onMounted(() => {
  if (hasSession('user_info')) {
    getUserInfo()
  }
})

const userInfo = ref<UserInfoClientVo>({
  avatar: "",
  email: "",
  id: "",
  mobile: "",
  nickname: "",
  stream: "",
  username: ""
})

const getUserInfo = async () => {
  const res = <resData>await queryByUsername({username: getSession('user_info').username});
  if (res.ok && res.data) {
    userInfo.value = res.data
  } else {
    redirectLogin()
    router.go(0)
  }
}


</script>

<template>
  <el-dropdown trigger="hover">
    <el-text class="el-dropdown-link" truncated>
      <el-space>
        <el-avatar :src="spliceMongodbUrl(userInfo.avatar)"/>
        <el-text type="info">{{ userInfo.username }}</el-text>
      </el-space>
    </el-text>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="routerPushOfName('user-info')">
          <el-icon style="font-size: 16px">
            <CarbonUserProfile/>
          </el-icon>
          {{ $t('message.personalCenter') }}
        </el-dropdown-item>
        <el-dropdown-item @click="toTenant">
          <el-icon style="font-size: 16px">
            <CarbonHome/>
          </el-icon>
          {{ $t('message.toTenant') }}
        </el-dropdown-item>
        <el-dropdown-item @click="routerPushOfName('home')">
          <el-icon style="font-size: 16px">
            <Promotion/>
          </el-icon>
          {{ $t('message.officialWebsite') }}
        </el-dropdown-item>
        <el-dropdown-item divided @click="signOut">
          <el-icon style="font-size: 16px">
            <CarbonPreviousOutline/>
          </el-icon>
          {{ $t('message.logout') }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style lang="less" scoped>

</style>
