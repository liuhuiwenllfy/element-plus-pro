<script lang="ts" setup>
import {ElImage} from 'element-plus'
import 'element-plus/es/components/image/style/css'

defineProps({
  list: {
    type: Array as () => Array<string>,
    required: true,
  },
  index: {
    type: Number,
    required: false,
    default: 0
  }
})
</script>

<template>
  <el-image
      :initial-index="1"
      :preview-src-list="list"
      :src="list[index]"
      :zoom-rate="1.2"
      fit="contain"/>
</template>

<style lang="scss" scoped>
.el-image {
  max-width: 100%;
  height: auto;
  border-radius: 6px;
}
</style>
