<!--
面包屑（插件市场使用）
-->
<script lang="ts" setup>
import {ArrowRight} from '@element-plus/icons-vue'

defineProps({
  value: {
    type: String,
    required: true,
    default: () => ''
  }
})
</script>

<template>
  <el-breadcrumb :separator-icon="ArrowRight" class="ve-breadcrumb">
    <el-breadcrumb-item to="search">{{ $t('message.home') }}</el-breadcrumb-item>
    <el-breadcrumb-item>{{ value }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<style lang="less" scoped>
.ve-breadcrumb {
  margin-bottom: 20px
}
</style>
