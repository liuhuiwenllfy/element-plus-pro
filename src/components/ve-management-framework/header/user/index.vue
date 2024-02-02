<script lang="ts" setup>
import {CaretBottom, Opportunity, Promotion} from '@element-plus/icons-vue'
import CarbonUserProfile from '~icons/carbon/user-profile'
import CarbonPassword from '~icons/carbon/password'
import CarbonHome from '~icons/carbon/home'
import CarbonPreviousOutline from '~icons/carbon/previous-outline'
import Password from '@/components/ve-management-framework/header/user/dialog/password/index.vue'
import {onMounted, ref} from 'vue'
import {useRouter} from 'vue-router'
import {store} from '@/vuex/store'
import {resData} from '@/entity/res'
import {logout} from '@/api/result/login'
import {getSession, removeSession} from '@/assets/js/sessionStorageUtils'
import {UserInfoClientVo} from '@/entity/vo/system/UserInfoClientVo'
import {queryByUsername} from '@/api/result/user'
import {redirectLogin, routerPushOfName, spliceMongodbUrl} from '@/assets/js/common'

const passwordDialogVisible = ref(false)

const userInfoDialogVisible = ref(false)

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

const router = useRouter()
const signOut = async () => {
  const res = <resData>await logout();
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

onMounted(() => {
  getUserInfo()
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
  if (res.ok) {
    userInfo.value = res.data
  }
}

</script>

<template>
  <div class="user">
    <el-dropdown trigger="hover">
      <span class="el-dropdown-link">
        <el-avatar :size="37" :src="spliceMongodbUrl(userInfo.avatar)"/>
        <el-icon class="el-icon--right">
          <CaretBottom/>
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="userInfoDialogVisible = true">
            <el-icon style="font-size: 16px">
              <CarbonUserProfile/>
            </el-icon>
            {{ $t('message.personalCenter') }}
          </el-dropdown-item>
          <el-dropdown-item @click="passwordDialogVisible = true">
            <el-icon style="font-size: 16px">
              <CarbonPassword/>
            </el-icon>
            {{ $t('message.modifyThePassword') }}
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
          <el-dropdown-item @click="routerPushOfName('feedback')">
            <el-icon style="font-size: 16px">
              <Opportunity/>
            </el-icon>
            {{ $t('message.feedback') }}
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
    <UserInfo :dialogVisible="userInfoDialogVisible" @closed="userInfoDialogVisible = false"/>
    <Password :dialogVisible="passwordDialogVisible" @closed="passwordDialogVisible = false"/>
  </div>
</template>

<style lang="less" scoped>
.user {
  padding: 10px 10px 9px;

  &:hover {
    background-color: var(--el-menu-hover-bg-color);
  }
}
</style>
