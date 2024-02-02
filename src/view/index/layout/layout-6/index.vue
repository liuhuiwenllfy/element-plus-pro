<script lang="ts" setup>
import Header from '@/components/ve-management-framework/header/index.vue'
import Aside from '@/components/ve-management-framework/aside/index.vue'
import Main from '@/view/index/main/index.vue'
</script>

<template>
  <div class="layout-6">
    <el-container>
      <el-aside>
        <Aside/>
      </el-aside>
      <el-container>
        <el-header>
          <Header/>
        </el-header>
        <el-main>
          <Main/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="less" scoped>
.layout-6{
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
    border-top: @solid;
  }
}
</style>
