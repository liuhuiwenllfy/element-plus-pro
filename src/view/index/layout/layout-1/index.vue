<script lang="ts" setup>
import Header from '@/components/ve-management-framework/header/index.vue'
import Main from '@/view/index/main/index.vue'
</script>

<template>
  <div class="layout-1">
    <el-container>
      <el-header>
        <Header/>
      </el-header>
      <el-main>
        <Main/>
      </el-main>
    </el-container>
  </div>
</template>

<style lang="less" scoped>
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
