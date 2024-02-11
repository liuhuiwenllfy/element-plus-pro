<script lang="ts" setup>

import LogoUrl from '/img/logo.png'
</script>

<template>
  <el-card>
    <template #header>
      <div class="card-header">
        <el-space>
          <el-image :src="LogoUrl" style="width: 30px; height: 30px"/>
          <span>{{ $t('message.welcomeCodeEase') }}</span>
        </el-space>
      </div>
    </template>
    <h2>{{ $t('message.welcomeCodeEase') }}</h2>
  </el-card>
</template>

<style lang="less" scoped>
.el-card {
  margin-bottom: 15px;

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 32px;
  }
}
</style>
