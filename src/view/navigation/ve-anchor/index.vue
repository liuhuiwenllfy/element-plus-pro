<script lang="ts" setup>
import VePage from '@/components/ve-page/index.vue'
import VeAnchor from '@/components/ve-anchor/index.vue'
import {ref} from "vue";
import code from './index.md?raw'
import json from '@/components/ve-anchor/package.json'
import {MyAnchor} from "@/view/navigation/ve-anchor/MyAnchor.ts";

const items = ref<MyAnchor[]>([
  {level: 0, id: "1", title: "part-1", color: '#C6E2FF'},
  {level: 1, id: "2", title: "part-1-1", color: '#F8E3C5'},
  {level: 1, id: "3", title: "part-1-2", color: '#FCD3D3'},
  {level: 0, id: "4", title: "part-2", color: '#C6E2FF'},
  {level: 1, id: "5", title: "part-2-1", color: '#F8E3C5'},
])
const stats = [
  {
    name: 'items',
    instructions: '锚点集合',
    type: 'array',
    optional: '-',
    default: '-',
  },
  {
    name: 'items:id',
    instructions: '锚点id，用于寻找对应的dom，该值对应锚点区域绑定的id属性，注意不要有#之类的特殊符号',
    type: 'string',
    optional: '-',
    default: '-',
  },
  {
    name: 'items:title',
    instructions: '锚点标题，用于展示',
    type: 'string',
    optional: '-',
    default: '-',
  },
  {
    name: 'items:level',
    instructions: '锚点层级，用于分层级展示',
    type: 'number',
    optional: '-',
    default: '-',
  },
  {
    name: 'height',
    instructions: '视窗高度',
    type: 'string',
    optional: '-',
    default: '300px',
  }
]
</script>

<template>
  <ve-page id="ve-anchor" :code="code" :stats="stats" :version="json.version" title="ve-anchor 锚点">
    <template #default>
      <el-card shadow="never">
        <ve-anchor height="400px" :items="items">
          <template #default>
            <div v-for="(item, index) in items" :key="index" :id="item.id"
                 :style="{height: '300px', background: item.color}"/>
          </template>
        </ve-anchor>
      </el-card>
    </template>
  </ve-page>
</template>

<style lang="scss" scoped>
</style>
