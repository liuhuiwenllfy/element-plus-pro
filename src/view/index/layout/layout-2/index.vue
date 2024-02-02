<script lang="ts" setup>
import Header from '@/components/ve-management-framework/header/index.vue'
import Main from '@/view/index/main/index.vue'
import VeFooter from "@/components/ve-footer/footer1/index.vue";
</script>

<template>
  <div class="layout-2">
    <el-container>
      <el-header>
        <Header/>
      </el-header>
      <el-main>
        <Main/>
      </el-main>
      <el-footer>
        <ve-footer/>
      </el-footer>
    </el-container>
  </div>
</template>

<style lang="less" scoped>
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
    border-top: @solid;
  }
}
</style>
