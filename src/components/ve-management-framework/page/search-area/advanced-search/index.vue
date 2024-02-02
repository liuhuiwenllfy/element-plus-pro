<script lang="ts" setup>
import {useStore} from '@/vuex/store'
import {ArrowDown, ArrowUp} from '@element-plus/icons-vue'

const store = useStore()

const props = defineProps({
  show: {
    type: Boolean,
    required: true,
    default: () => false
  }
})
const emits = defineEmits(['handleClick'])
const click = () => {
  emits('handleClick', !props.show)
}
</script>

<template>
  <el-button style="float: right; margin-left: 12px" text type="primary" @click="click">
    <span style="margin-right: 10px">{{ props.show ? $t('message.collapse') : $t('message.expand') }}</span>
    <el-icon v-if="!props.show">
      <ArrowDown/>
    </el-icon>
    <el-icon v-else>
      <ArrowUp/>
    </el-icon>
  </el-button>
</template>

<style lang="less" scoped>
.advanced-search {

}
</style>
