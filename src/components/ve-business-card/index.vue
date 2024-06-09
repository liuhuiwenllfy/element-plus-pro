<script lang="ts" setup>
import {ElCard, ElSpace} from 'element-plus'
import 'element-plus/es/components/card/style/css'
import 'element-plus/es/components/space/style/css'
</script>

<template>
  <el-card shadow="hover">
    <el-space>
      <slot name="avatar"></slot>
      <el-space alignment="flex-start" direction="vertical">
        <slot name="title"/>
        <slot name="operate"/>
      </el-space>
    </el-space>
  </el-card>
</template>

<style lang="scss" scoped>

</style>
