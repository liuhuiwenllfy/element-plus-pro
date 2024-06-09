<script lang="ts" setup>
import {ElContainer, ElHeader, ElMain} from 'element-plus'
import 'element-plus/es/components/container/style/css'
import 'element-plus/es/components/header/style/css'
import 'element-plus/es/components/main/style/css'
</script>

<template>
  <div class="layout-1">
    <el-container>
      <el-header>
        <slot name="headerArea"></slot>
      </el-header>
      <el-main>
        <slot name="mainArea"></slot>
      </el-main>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.layout-1 {
  height: 100%;

  .el-container {
    height: 100%;
  }

  .el-header {
    padding: 0;
  }

  .el-main {
    padding: 0;
  }
}
</style>
