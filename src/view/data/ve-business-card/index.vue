<script lang="ts" setup>
import VePage from "@/components/ve-page/index.vue";
import VeBusinessCard from '@/components/ve-business-card/index.vue'
import code from './index.md?raw'
import json from '@/components/ve-business-card/package.json'

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
  <ve-page id="ve-business-card" :_slots="slots" :code="code" :version="json.version" title="ve-business-card 名片">
    <template #default>
      <ve-business-card style="width: 400px">
        <template #avatar>
          <el-image src="avatar.png" style="width: 80px; height: 80px"/>
        </template>
        <template #title>Demo</template>
        <template #operate>
          <el-button size="small">操作</el-button>
        </template>
      </ve-business-card>
    </template>
  </ve-page>
</template>

<style lang="scss" scoped>

</style>
