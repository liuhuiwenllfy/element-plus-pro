<script lang="ts" setup>
import VePage from '@/components/ve-page/index.vue'
import VeAnchor from '@/components/ve-anchor/index.vue'
import {ref} from "vue";

const items = ref([
  {
    id: 'part-1',
    title: 'part-1',
  },
  {
    id: 'part-2',
    title: 'part-2',
  },
  {
    id: 'part-3',
    title: 'part-3',
    children: [
      {
        id: 'part-3-1',
        title: 'part-3-1',
      },
      {
        id: 'part-3-2',
        title: 'part-3-2',
      },
    ],
  }
])
const stats = [
  {
    name: 'items',
    instructions: '锚点树结构',
    type: 'array',
    optional: '-',
    default: '-',
  },
  {
    name: 'items:id',
    instructions: '锚点id，用于寻找对应的dom，该值对应锚点区域绑定的id属性',
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
    name: 'group',
    instructions: '所有锚点区域的class属性，用于获取锚点区域dom集合',
    type: 'string',
    optional: '-',
    default: '-',
  },
  {
    name: 'parent-scroll',
    instructions: '需要监听滚动的dom的id属性，用于获取滚动区域dom',
    type: 'string',
    optional: '-',
    default: '-',
  },
]

</script>

<template>
  <div class="ve-emoji">
    <ve-page id="ve-anchor" pm-id="b63e7d3bb2a44b386742c033d4947f04" title="锚点">
      <template #default>
        <el-card shadow="never">
          <el-row id="parent-scroll" style="height: 300px; overflow: auto">
            <el-col :span="18">
              <div id="part-1" class="group" style="height: 300px; background: #C6E2FF"/>
              <div id="part-2" class="group" style="height: 300px; background: #F8E3C5"/>
              <div id="part-3" class="group" style="height: 300px; background: #FCD3D3"/>
              <div id="part-3-1" class="group" style="height: 300px; background: #C6E2FF"/>
              <div id="part-3-2" class="group" style="height: 300px; background: #F8E3C5"/>
            </el-col>
            <el-col :span="6">
              <ve-anchor :items="items" group="group" parent-scroll="parent-scroll"/>
            </el-col>
          </el-row>
        </el-card>
      </template>
      <template #api>
        <ve-stats :stats="stats"/>
      </template>
      <template #warn>
        <p>该组件是基于element-plus开发，需要在此基础上使用。</p>
      </template>
    </ve-page>
  </div>
</template>

<style lang="scss" scoped>
#parent-scroll {
  scroll-behavior: smooth;
  overflow-y: scroll; /* 确保容器可以滚动 */
}
</style>
