<!--
气泡对话框
-->
<script lang="ts" setup>
defineProps({
  avatar: {
    type: String,
    required: false,
    default: () => ''
  },
  direction: {
    type: String,
    required: false,
    default: () => 'left'
  },
  content: {
    type: String,
    required: true,
    default: () => ''
  }
})
</script>

<template>
  <el-space alignment="flex-start" class="ve-bubble-dialog">
    <el-avatar v-if="avatar && direction === 'left'" :size="39" src="/img/header.png"></el-avatar>
    <div class="dialog-bubble">
      <div class="content">
        <el-text type="info">
          {{ content }}
        </el-text>
      </div>
      <div :class="direction === 'left'? 'arrow-left':'arrow-right'"></div>
    </div>
    <el-avatar v-if="avatar && direction === 'right'" :size="39" src="/img/header.png"></el-avatar>
  </el-space>
</template>

<style lang="less" scoped>
.ve-bubble-dialog {
  .dialog-bubble {
    position: relative;
    background-color: @info6;
    border-radius: 10px;
    padding: 10px;
    margin: 0 5px;
    max-width: 800px;
  }

  .arrow-left {
    position: absolute;
    top: 20px;
    left: -5px;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-right: 10px solid @info6;
    border-bottom: 10px solid transparent;
  }

  .arrow-right {
    position: absolute;
    top: 20px;
    right: -5px;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-left: 10px solid @info6;
    border-bottom: 10px solid transparent;
  }

  .content {
    color: #333;
  }
}
</style>
