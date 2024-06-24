<script lang="ts" setup>
defineProps({
  _slots: {
    type: Array<any>,
    required: false,
    default: () => []
  }
})
</script>

<template>
  <h4>Slots</h4>
  <el-table :data="_slots">
    <el-table-column label="名称" prop="name"/>
    <el-table-column label="详情" prop="details"/>
  </el-table>
</template>

<style lang="scss" scoped>

</style>
