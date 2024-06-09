<script lang="ts" setup>

import {ElPagination} from 'element-plus'
import 'element-plus/es/components/pagination/style/css'
import {ref} from "vue";

const props = defineProps({
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

const _pageSize = ref(props.pageSize)
const _current = ref(props.current)

const emits = defineEmits(['handleSizeChange', 'handleCurrentChange'])
const handleSizeChange = (val: number) => {
  _pageSize.value = val
  emits('handleSizeChange', val)
}
const handleCurrentChange = (val: number) => {
  _current.value = val
  emits('handleCurrentChange', val)
}
</script>

<template>
  <div class="pagination">
    <el-pagination
        :current-page="_current"
        :page-size="_pageSize"
        :page-sizes="[10, 15, 20, 50]"
        :total="total"
        background
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
    />
  </div>
</template>

<style lang="scss" scoped>

</style>
