<script lang="ts" setup>
import {ElImage, ElSpace} from 'element-plus'
import 'element-plus/es/components/image/style/css'
import 'element-plus/es/components/space/style/css'

defineProps({
  logo: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
})
</script>

<template>
  <el-space class="logo">
    <el-image :src="logo"/>
    <strong class="logo-text">{{ name }}</strong>
  </el-space>
</template>

<style lang="scss" scoped>
.logo {
  .el-image {
    height: 40px;
    width: 40px;
  }

  .logo-text {
    width: 200px;
    font-size: 20px;
  }
}
</style>
