<!--
图片预览插件
-->
<script lang="ts" setup>

const props = defineProps({
  list: {
    type: Array as () => Array<string>,
    required: false,
    default: () => ['/img/default.png']
  }
})
</script>

<template>
  <div class="ve-preview">
    <el-image
        :initial-index="1"
        :preview-src-list="list || ['/img/default.png']"
        :src="list[0]||'/img/default.png'"
        :zoom-rate="1.2"
        class="customize-img"
        fit="contain"/>
  </div>
</template>

<style lang="less" scoped>
.ve-preview {
  .el-image {
    height: 100%;
    border-radius: 6px;
  }
}
</style>
