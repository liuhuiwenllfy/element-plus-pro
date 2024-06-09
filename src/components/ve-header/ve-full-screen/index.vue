<script lang="ts" setup>
import screenFull from 'screenfull'
import {VeFullscreenAlt, VeFullscreenExitAlt} from 've-icon/components'
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
  <div @click="setFullScreen">
    <el-icon>
      <VeFullscreenAlt v-show="!fullScreen"/>
      <VeFullscreenExitAlt v-show="fullScreen"/>
    </el-icon>
  </div>
</template>

<style lang="scss" scoped>

</style>
