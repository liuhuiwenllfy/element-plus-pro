<script lang="ts" setup>
import {ElImage} from 'element-plus'
import 'element-plus/es/components/image/style/css'

defineProps({
  list: {
    type: Array as () => Array<string>,
    required: true,
  }
})
</script>

<template>
  <div class="ve-preview">
    <el-image
        :initial-index="1"
        :preview-src-list="list"
        :src="list[0]"
        :zoom-rate="1.2"
        class="customize-img"
        fit="contain"/>
  </div>
</template>

<style lang="scss" scoped>
.ve-preview {
  .el-image {
    height: 100%;
    border-radius: 6px;
  }
}
</style>
