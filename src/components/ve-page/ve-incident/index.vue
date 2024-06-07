<script lang="ts" setup>
defineProps({
  incident: {
    type: Array,
    required: false,
    default: () => []
  }
})
</script>

<template>
  <h4>事件</h4>
  <el-table :data="incident">
    <el-table-column label="事件名" prop="name"/>
    <el-table-column label="说明" prop="instructions"/>
    <el-table-column label="回调参数" prop="callback"/>
  </el-table>
</template>

<style lang="less" scoped>

</style>
