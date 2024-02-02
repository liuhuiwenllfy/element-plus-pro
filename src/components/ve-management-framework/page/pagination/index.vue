<script lang="ts" setup>

defineProps({
  current: {
    type: Number,
    required: true,
    default: () => 1
  },
  pageSize: {
    type: Number,
    required: true,
    default: () => 10
  },
  total: {
    type: Number,
    required: true,
    default: () => 0
  }
})
const emits = defineEmits(['handleSizeChange', 'handleCurrentChange'])
const handleSizeChange = (val: number) => {
  emits('handleSizeChange', val)
}
const handleCurrentChange = (val: number) => {
  emits('handleCurrentChange', val)
}
</script>

<template>
  <div class="pagination">
    <el-pagination
        :current-page="current"
        :page-size="pageSize"
        :page-sizes="[10, 15, 20, 50]"
        :total="total"
        background
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
    />
  </div>
  <div style="clear: both;"/>
</template>

<style lang="less" scoped>
.pagination {
  float: right;
  padding: 10px;
}
</style>
