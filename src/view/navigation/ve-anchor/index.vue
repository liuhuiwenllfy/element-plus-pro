<script lang="ts" setup>
import VePage from '@/components/ve-page/index.vue'
import VeAnchor from '@/components/ve-anchor/index.vue'
import {ref} from "vue";
import {Anchor} from "@/components/ve-anchor/Anchor.ts";
import code from './index.md?raw'
import json from '@/components/ve-anchor/package.json'

const nav = ref<Anchor[]>([
  {level: 0, line: 1, text: "part-1"},
  {level: 1, line: 2, text: "part-1-1"},
  {level: 1, line: 3, text: "part-1-2"},
  {level: 0, line: 4, text: "part-2"},
  {level: 1, line: 5, text: "part-2-1"},
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
const _line = ref<number>(1)
const enterView = (line: number) => {
  _line.value = line
}

</script>

<template>
  <ve-page id="ve-anchor" :code="code" :stats="stats" :version="json.version" title="ve-anchor 锚点">
    <template #default>
      <el-card shadow="never">
        <ve-anchor :height="300" :items="nav" @enter-view="enterView">
          <template #default>
            <div id="1" style="height: 300px; background: #C6E2FF"/>
            <div id="2" style="height: 300px; background: #F8E3C5"/>
            <div id="3" style="height: 300px; background: #FCD3D3"/>
            <div id="4" style="height: 300px; background: #C6E2FF"/>
            <div id="5" style="height: 300px; background: #F8E3C5"/>
          </template>
          <template #navigation>
            <el-space>
              <div class="mark" :style="{top: `${(_line - 1) * 24 + 2}px`}"/>
              <div>
                <div v-for="item in nav" :key="item.line">
                  <el-space>
                    <div class="nav" :style="{paddingLeft: `${16 * item.level + 10}px`}">{{ item.text }}</div>
                  </el-space>
                </div>
              </div>
            </el-space>
          </template>
        </ve-anchor>
      </el-card>
    </template>
  </ve-page>
</template>

<style lang="scss" scoped>
.mark {
  position: absolute;
  display: inline-block;
  border: 2px solid #409EFF;
  border-radius: 4px;
  height: 16px;
  transition: top .25s ease-in-out, opacity .25s;
}

.is-selected {
  border-color: #409EFF;
}

.nav {
  cursor: pointer;

  &:hover {
    color: #409EFF;
  }
}
</style>
