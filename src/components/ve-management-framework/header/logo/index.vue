<script lang="ts" setup>
import LogoUrl from '/img/logo.png'
import {useStore} from '@/vuex/store'

const store = useStore()

</script>

<template>
  <div class="logo">
    <el-image :src="LogoUrl"/>
    <strong v-show="store.state.showAsideLogo" class="logo-text">{{ store.state.name}}</strong>
  </div>
</template>

<style lang="less" scoped>
.logo {
  .el-image {
    padding: 10px 10px 9px 10px;
    height: 40px;
    vertical-align: middle;
  }
  .logo-text {
    width: 200px;
    display: inline-flex;
    font-size: 20px;
  }
}
</style>
