<script lang="ts" setup>
import screenFull from 'screenfull'
import {VeFullscreenAlt, VeFullscreenExitAlt} from 've-icon/other/components'
import {onMounted, onUnmounted} from 'vue'
import {ElIcon} from 'element-plus'
import 'element-plus/es/components/icon/style/css'

const props = defineProps({
  fullScreen: {
    type: Boolean,
    required: false,
    default: () => false
  }
})

onMounted(() => {
  window.addEventListener('resize', currentScreen)
})

onUnmounted(() => {
  window.removeEventListener('resize', currentScreen)
})
const emits = defineEmits(['handleFullScreen'])
// 浏览器改变触发
const currentScreen = () => {
  if (screenFull.isFullscreen !== props.fullScreen) {
    emits('handleFullScreen', screenFull.isFullscreen)
  }
}

const setFullScreen = () => {
  emits('handleFullScreen', screenFull.isFullscreen)
  if (screenFull.isEnabled) screenFull.toggle()
}
</script>

<template>
  <el-icon size="20" style="padding: 20px" @click="setFullScreen">
    <VeFullscreenAlt v-show="!fullScreen"/>
    <VeFullscreenExitAlt v-show="fullScreen"/>
  </el-icon>
</template>

<style lang="scss" scoped>

</style>
