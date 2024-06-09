<script lang="ts" setup>
import {ElContainer, ElFooter, ElHeader, ElMain} from 'element-plus'
import 'element-plus/es/components/container/style/css'
import 'element-plus/es/components/footer/style/css'
import 'element-plus/es/components/header/style/css'
import 'element-plus/es/components/main/style/css'
</script>

<template>
  <div class="layout-2">
    <el-container>
      <el-header>
        <slot name="headerArea"></slot>
      </el-header>
      <el-main>
        <slot name="mainArea"></slot>
      </el-main>
      <el-footer>
        <slot name="footerArea"></slot>
      </el-footer>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.layout-2 {
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

  .el-footer {
    padding: 0;
    border-top: 1px solid var(--el-border-color);
  }
}
</style>
