<script lang="ts" setup>
import VePage from "@/components/ve-page/index.vue";
import VeBusinessCard from '@/components/ve-business-card/index.vue'

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
</script>

<template>
  <ve-page id="ve-business-card" title="ve-business-card 名片">
    <template #default>
      <ve-business-card style="width: 400px">
        <template #avatar>
          <el-image src="/logo.png" style="width: 40px; height: 40px"/>
        </template>
        <template #title>Demo</template>
        <template #operate>
          <el-button size="small">操作</el-button>
        </template>
      </ve-business-card>
    </template>
    <template #api>
      <ve-slots :slots="slots"/>
    </template>
    <template #warn>
      <p>该组件是基于element-plus开发，需要在此基础上使用。</p>
    </template>
  </ve-page>
</template>

<style lang="scss" scoped>
.custom-image {
  width: 300px;
  height: 150px;
  border-radius: 5px
}
</style>
