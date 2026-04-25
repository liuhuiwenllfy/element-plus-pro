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
  },
  bottom: {
    type: String,
    required: false,
    default: () => '100px'
  },
  right: {
    type: String,
    required: false,
    default: () => '50px'
  }
})
const emits = defineEmits(['backTop'])
const backTop = () => {
  emits('backTop')
}
</script>

<template>
  <div :style="{bottom: bottom, right: right}" class="back-top">
    <el-space :size="[0,0]" direction="vertical">
      <slot name="default"/>
      <div v-show="isShowBack" class="top" @click="backTop">
        <el-icon>
          <CaretTop/>
        </el-icon>
      </div>
    </el-space>
  </div>
</template>

<style lang="scss" scoped>
.back-top {
  width: 50px;
  z-index: 999;
  position: absolute;
  border-radius: 4px;
  background-color: var(--el-bg-color);
  border: 1px solid var(--el-border-color-lighter);

  .top {
    font-size: 24px;
    padding: 8px 13px 7px;

    &:hover {
      .el-icon {
        color: #66b1ff;
      }
    }
  }
}
</style>