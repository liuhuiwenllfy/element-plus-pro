<script lang="ts" setup>
import screenFull from 'screenfull'
import DashiconsFullscreenAlt from '~icons/dashicons/fullscreen-alt'
import DashiconsFullscreenExitAlt from '~icons/dashicons/fullscreen-exit-alt'
import { onMounted, onUnmounted } from 'vue'
import { useStore } from '@/vuex/store'

const store = useStore()

onMounted(() => {
  window.addEventListener('resize', currentScreen)
})

onUnmounted(() => {
  window.removeEventListener('resize', currentScreen)
})

// 浏览器改变触发
const currentScreen = () => {
  if (screenFull.isFullscreen !== store.state.fullScreen) store.commit('fullScreen', screenFull.isFullscreen);
}

const setFullScreen = () => {
  store.dispatch('fullScreen')
  if (screenFull.isEnabled) screenFull.toggle()
}
</script>

<template>
  <div class="fullScreen" @click="setFullScreen">
    <el-icon>
      <DashiconsFullscreenAlt v-show="!store.state.fullScreen"/>
      <DashiconsFullscreenExitAlt v-show="store.state.fullScreen"/>
    </el-icon>
  </div>
</template>

<style lang="less" scoped>
.fullScreen {
  .el-icon{
    font-size: 20px;
    padding: 20px 10px 19px;
    &:hover {
      background-color: var(--el-menu-hover-bg-color);
    }
  }
}
</style>
