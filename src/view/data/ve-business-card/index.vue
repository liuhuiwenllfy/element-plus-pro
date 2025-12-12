<script lang="ts" setup>
import VePage from "@/components/ve-page/index.vue";
import VeBusinessCard from '@/components/ve-business-card/index.vue'
import readme from './index.md?raw'
import json from '@/components/ve-business-card/package.json'
import {ElMessage} from "element-plus";

const slots = [
  {
    name: 'avatar',
    details: '头像'
  },
  {
    name: 'title',
    details: '标题'
  },
  {
    name: 'operate',
    details: '操作'
  },
]

const handleClick = () => {
  ElMessage.success('点击了按钮')
}
</script>

<template>
  <ve-page :json="json" :_slots="slots" :readme="readme">
    <template #default>
      <ve-business-card style="width: 400px">
        <template #avatar>
          <el-image src="avatar.png" style="width: 80px; height: 80px"/>
        </template>
        <template #title>Demo</template>
        <template #operate>
          <el-button @click="handleClick">操作</el-button>
        </template>
      </ve-business-card>
    </template>
  </ve-page>
</template>

<style lang="scss" scoped>

</style>
