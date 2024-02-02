<!--
网站头部展示登录|注册（门户和插件市场使用）
-->
<script lang="ts" setup>

import {useRouter} from "vue-router";

const router = useRouter();
const openLogin = () => {
  router.replace('/login')
}
</script>

<template>
  <el-space class="ve-login">
    <el-avatar src="/img/header.png"/>
    <el-text truncated>
      <el-space :size="10">
        <el-link :underline="false" class="login-button" @click="openLogin">{{ $t('message.login') }}</el-link>
        <el-text type="info">|</el-text>
        <el-link :underline="false" class="register-button" @click="openLogin">{{ $t('message.register') }}</el-link>
      </el-space>
    </el-text>
  </el-space>
</template>

<style lang="less" scoped>
.ve-login {

}

</style>
