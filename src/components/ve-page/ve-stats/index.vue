<script lang="ts" setup>
defineProps({
  stats: {
    type: Array,
    required: false,
    default: () => []
  }
})
</script>

<template>
  <h4>属性</h4>
  <el-table :data="stats">
    <el-table-column label="属性名" prop="name"/>
    <el-table-column label="说明" prop="instructions"/>
    <el-table-column label="类型" prop="type"/>
    <el-table-column label="可选值" prop="optional"/>
    <el-table-column label="默认值" prop="default"/>
  </el-table>
</template>

<style lang="less" scoped>

</style>
