<script lang="ts" setup>
import {ElAvatar, ElLink, ElSpace, ElText} from 'element-plus'
import {PropType, reactive} from 'vue'
import 'element-plus/es/components/avatar/style/css'
import 'element-plus/es/components/link/style/css'
import 'element-plus/es/components/space/style/css'
import 'element-plus/es/components/text/style/css'

defineProps({
  avatar: {
    type: String,
    required: true,
  },
  language: {
    type: String as PropType<'zhCn' | 'en'>,
    required: false,
    default: () => 'zhCn'
  },
})

const emits = defineEmits(['handleLogin', 'handleRegister'])

const toLogin = () => {
  emits('handleLogin')
}
const toRegister = () => {
  emits('handleRegister')
}

const content = reactive({
  login: {
    zhCn: '登录',
    en: 'login'
  },
  register: {
    zhCn: '注册',
    en: 'register'
  },
})
</script>

<template>
  <el-space>
    <el-avatar :src="avatar"/>
    <el-space :size="10">
      <el-link :underline="false" @click="toLogin">{{ content.login[language] }}</el-link>
      <el-text type="info">|</el-text>
      <el-link :underline="false" @click="toRegister">{{ content.register[language] }}</el-link>
    </el-space>
  </el-space>
</template>

<style lang="scss" scoped>

</style>
