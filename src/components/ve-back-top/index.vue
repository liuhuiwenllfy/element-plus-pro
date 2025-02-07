<script lang="ts" setup>
import {CaretTop} from '@element-plus/icons-vue'
import {ElButton, ElSpace} from 'element-plus'
import 'element-plus/es/components/space/style/css'
import 'element-plus/es/components/button/style/css'

defineProps({
  isShowBack: {
    type: Boolean,
    required: false,
    default: () => false
  }
})
const emits = defineEmits(['backTop'])
const backTop = () => {
  emits('backTop')
}
</script>

<template>
  <div class="back-top">
    <el-space :size="[0,0]" direction="vertical">
      <slot name="default"/>
      <el-button v-show="isShowBack" :icon="CaretTop"
                 @click="backTop">
      </el-button>
    </el-space>
  </div>
</template>

<style lang="scss" scoped>
.back-top {
  z-index: 999;
  position: absolute;
  right: 50px;
  bottom: 100px;
  border-radius: 4px;
  background-color: var(--el-bg-color);
  border: 1px solid var(--el-border-color);
  border-color: var(--el-border-color-lighter);

  .el-button {
    height: 50px;
    width: 50px;
    border: none;
    background-color: var(--el-bg-color);
    color: var(--el-text-color-placeholder);
    font-size: 20px;

    &:hover {
      color: var(--el-color-primary);
      background-color: transparent;
    }
  }

  .line {
    width: 50px;
    border-top: 1px solid;
    border-color: var(--el-border-color-lighter);
  }
}
</style>