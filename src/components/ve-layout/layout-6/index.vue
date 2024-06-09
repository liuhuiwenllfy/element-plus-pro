<script lang="ts" setup>
import {ElAside, ElContainer, ElHeader, ElMain} from 'element-plus'
import 'element-plus/es/components/aside/style/css'
import 'element-plus/es/components/container/style/css'
import 'element-plus/es/components/header/style/css'
import 'element-plus/es/components/main/style/css'
</script>

<template>
  <div class="layout-6">
    <el-container>
      <el-aside>
        <slot name="asideArea"></slot>
      </el-aside>
      <el-container>
        <el-header>
          <slot name="headerArea"></slot>
        </el-header>
        <el-main>
          <slot name="mainArea"></slot>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.layout-6 {
  height: 100%;

  .el-container {
    height: 100%;
  }

  .el-aside {
    width: auto;
    padding: 0;
    border-right: solid 1px var(--el-menu-border-color);
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
