<!--
网站页脚
-->
<script lang="ts" setup>
import {store} from "@/vuex/store";
import batb from '/img/备案图标.png'
</script>

<template>
  <div class="ve-footer">
    <slot></slot>
    <div class="container">
      <el-space :direction="['xs'].includes(store.state.responsiveLayout)? 'vertical':'horizontal'">
        <el-space>
          <el-image :src="batb" style="width: 16px; height: 17px"></el-image>
          <el-link href="https://beian.mps.gov.cn/#/query/webSearch?code=12010302002465" rel="noreferrer"
                   target="_blank">津公网安备12010302002465
          </el-link>
        </el-space>
        <el-text size="default" type="info">Copyright © 2023 刘凌枫羽工作室所有</el-text>
        <el-link href="https://beian.miit.gov.cn">津ICP备2023000715号-1</el-link>
      </el-space>

    </div>
  </div>
</template>

<style lang="less" scoped>
.ve-footer {
  box-shadow: var(--el-box-shadow-lighter);

  .container {
    padding: 20px;
    text-align: center
  }
}
</style>
