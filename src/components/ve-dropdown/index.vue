<!--
下拉选择（可显示当前选择的名称）
-->
<script lang="ts" setup>
import {ArrowDown} from '@element-plus/icons-vue'

const prop = defineProps({
  selected: {
    type: String,
    required: true,
    default: () => ''
  },
  list: {
    type: Array as () => string[],
    required: true,
    default: () => []
  }
})
const emits = defineEmits(['handleCommand'])
const handleCommand = (command: string) => {
  emits('handleCommand', command)
}
</script>

<template>
  <el-dropdown class="ve-dropdown" @command="handleCommand">
    <span class="el-dropdown-link">
      {{ selected }}
      <el-icon class="el-icon--right">
        <arrow-down/>
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item v-for="(item, index) in list" :key="index" :command="item">{{ item }}</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style lang="less" scoped>
.ve-dropdown {

}
</style>