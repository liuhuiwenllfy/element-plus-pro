<script lang="ts" setup>
import VePage from '@/components/ve-page/index.vue'
import VeSearchArea from '@/components/ve-search-area/index.vue'
import {ref} from "vue";
import code from './index.md?raw'
import json from '@/components/ve-search-area/package.json'

const _open = ref(true)

const stats = [
  {
    name: 'open',
    instructions: '展开开关',
    type: 'boolean',
    optional: 'true-展开；false-收起',
    default: 'false',
  },
  {
    name: 'show',
    instructions: '是否显示展开按钮',
    type: 'boolean',
    optional: 'true-展开；false-收起',
    default: 'true',
  },
  {
    name: 'language',
    instructions: '国际化',
    type: 'string',
    optional: 'zhCN，en',
    default: 'zhCN',
  },
]

const incident = [
  {
    name: 'handle-click',
    instructions: '展开按钮回调',
    callback: 'open',
  },
]
</script>

<template>
  <ve-page id="ve-search-area" :code="code" :incident="incident" :stats="stats" :version="json.version"
           title="ve-search-area 搜索区域">
    <template #default>
      <ve-search-area
          :open="_open"
          :show="true"
          language="zhCn"
          @handle-click="_open = $event">
        <el-form inline>
          <el-form-item>
            <el-input placeholder="请输入"/>
          </el-form-item>
          <el-form-item>
            <el-input placeholder="请输入"/>
          </el-form-item>
          <el-form-item>
            <el-input placeholder="请输入"/>
          </el-form-item>
          <el-form-item>
            <el-input placeholder="请输入"/>
          </el-form-item>
          <el-form-item>
            <el-input placeholder="请输入"/>
          </el-form-item>
          <el-form-item>
            <el-input placeholder="请输入"/>
          </el-form-item>
          <el-form-item>
            <el-input placeholder="请输入"/>
          </el-form-item>
          <el-form-item v-if="_open">
            <el-input placeholder="请输入"/>
          </el-form-item>
          <el-form-item v-if="_open">
            <el-input placeholder="请输入"/>
          </el-form-item>
        </el-form>
      </ve-search-area>
    </template>
  </ve-page>
</template>

<style lang="scss" scoped>
</style>
