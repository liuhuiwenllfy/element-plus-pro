<script setup>

import {useStore} from '@/vuex/store'
import {computed, reactive} from 'vue'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'

const store = useStore()

const html = document.querySelector('html')
if (store.state.dark) {
  html.classList.add('dark')
} else {
  html.classList.remove('dark')
}

const locale = computed(() => (store.state.internationalization === 'zhCn' ? zhCn : en))

const config = reactive({
  autoInsertSpace: true
})

</script>

<template>
  <el-config-provider :button="config" :locale="locale" :size="store.state.globalSize">
    <router-view v-loading.fullscreen.lock="store.state.fullscreenLoading"/>
    <el-backtop :bottom="100" :right="50"/>
  </el-config-provider>

</template>

<style lang="less">
html, body, app {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  font-family: @element-plus;
  word-WRAP: break-word;

  //解决富文本全屏滚动条问题
  &:has(.w-e-full-screen-container) {
    overflow: hidden;

    //解决层级问题
    .ve-wang-editor:not(.w-e-full-screen-container) {
      display: none;
    }
  }

  //&:has(.w-e-modal:not([style*="display: none"])) {
  //  overflow: hidden;
  //}
}

#app {
  height: 100%;
  width: 100%;
}

html.dark {

  //富文本编辑器适配夜间模式
  --w-e-toolbar-bg-color: #121212;
  --w-e-toolbar-color: #fff;
  --w-e-textarea-bg-color: #121212;
  --w-e-textarea-color: #fff;
  --w-e-textarea-slight-border-color: #333;
  --w-e-textarea-slight-bg-color: #333;
  --w-e-toolbar-active-color: #fff;
  --w-e-toolbar-active-bg-color: #333;
  --w-e-toolbar-border-color: #333;
  --w-e-modal-button-bg-color: #409eff;
  --w-e-modal-button-border-color: #333;
}
</style>
