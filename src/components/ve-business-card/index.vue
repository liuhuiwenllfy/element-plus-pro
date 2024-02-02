<!--
名片（带有头像，标题，操作的卡片）
-->
<script lang="ts" setup>

const props = defineProps({
  src: {
    type: Object as any,
    required: true,
    default: () => '/img/default.png'
  },
})
</script>

<template>
  <el-card class="ve-business-card" shadow="hover">
    <el-image :src="src" class="image" fit="contain"/>
    <div class="title">
      <slot name="title"/>
      <slot name="operate"/>
    </div>
  </el-card>
</template>

<style lang="less" scoped>
.ve-business-card {
  .image {
    vertical-align: middle;
    width: 50px;
    height: 50px;
    border-radius: 6px;
    border: 1px solid @info6;
  }

  .title {
    width: calc(100% - 72px);
    vertical-align: middle;
    display: inline-block;
    margin-left: 10px;
  }
}
</style>
