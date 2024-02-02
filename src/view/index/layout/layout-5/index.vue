<script lang="ts" setup>
import Header from '@/components/ve-management-framework/header/index.vue'
import Aside from '@/components/ve-management-framework/aside/index.vue'
import Main from '@/view/index/main/index.vue'
import VeFooter from "@/components/ve-footer/footer1/index.vue";
</script>

<template>
  <div class="layout-5">
    <el-container>
      <el-header>
        <Header/>
      </el-header>
      <el-container class="embedded">
        <el-aside>
          <Aside/>
        </el-aside>
        <el-container>
          <el-main>
            <Main/>
          </el-main>
          <el-footer>
            <ve-footer/>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="less" scoped>
.layout-5{
  height: 100%;
  .el-container {
    height: 100%;
    .el-container.embedded{
      height: calc(100% - 60px)
    }
  }


  .el-aside {
    padding: 0;
    width: auto;
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
