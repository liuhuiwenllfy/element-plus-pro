<script lang="ts" setup>
import {ElAside, ElContainer, ElFooter, ElHeader, ElMain} from 'element-plus'
import 'element-plus/es/components/aside/style/css'
import 'element-plus/es/components/container/style/css'
import 'element-plus/es/components/footer/style/css'
import 'element-plus/es/components/header/style/css'
import 'element-plus/es/components/main/style/css'
</script>

<template>
  <div class="layout-5">
    <el-container>
      <el-header>
        <slot name="headerArea"></slot>
      </el-header>
      <el-container class="embedded">
        <el-aside>
          <slot name="asideArea"></slot>
        </el-aside>
        <el-container>
          <el-main>
            <slot name="mainArea"></slot>
          </el-main>
          <el-footer>
            <slot name="footerArea"></slot>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.layout-5 {
  height: 100%;

  .el-container {
    height: 100%;

    .el-container.embedded {
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
    border-top: 1px solid var(--el-border-color);
  }
}

</style>
