<script lang="ts" setup>
import VePage from "@/components/ve-page/index.vue";
import VeIncident from "@/components/ve-page/ve-incident/index.vue";
import VePlugin from '@/components/ve-plugin/index.vue'
import VeStats from "@/components/ve-page/ve-stats/index.vue";
import VeSlots from "@/components/ve-page/ve-slots/index.vue";

const stats = [
  {
    name: 'id',
    instructions: '唯一标识',
    type: 'string',
    optional: '-',
    default: '-',
  },
]

const incident = [
  {
    name: 'handle-click',
    instructions: '点击标题回调',
    callback: 'id',
  }
]

const slots = [
  {
    name: 'preview',
    details: '预览区域'
  },
  {
    name: 'title',
    details: '标题'
  },
  {
    name: 'tag',
    details: '标签'
  },
  {
    name: 'description',
    details: '描述'
  },
  {
    name: 'author',
    details: '作者'
  },
  {
    name: 'releaseTime',
    details: '发布时间'
  },
  {
    name: 'clickVolume',
    details: '点击量'
  },
  {
    name: 'readingQuantity',
    details: '阅读量'
  },
  {
    name: 'download',
    details: '下载量'
  },
  {
    name: 'comment',
    details: '评论数量'
  },
  {
    name: 'collect',
    details: '收藏数量'
  },
]
</script>

<template>
  <ve-page id="ve-plugin" title="ve-plugin 插件">
    <template #default>
      <ve-plugin id="123456" @handle-click="console.log($event)">
        <template #preview>
          <el-image src="avatar.png"></el-image>
        </template>
        <template #title>Cron表达式选择器</template>
        <template #tag>
          <el-space>
            <el-tag>时间选择器</el-tag>
            <el-tag>定时器</el-tag>
            <el-tag>cron</el-tag>
          </el-space>
        </template>
        <template #description>
          Cron表达式选择器是用于定时任务调度的一种常见工具，通常用于指定任务的执行时间。Cron表达式由一系列时间单位和对应的时间值组成，用于指定任务的执行时间。
        </template>
        <template #author>张三</template>
        <template #releaseTime>2024-02-14 18:13:54</template>
        <template #clickVolume>99+</template>
        <template #readingQuantity>99+</template>
        <template #download>99+</template>
        <template #comment>99+</template>
        <template #collect>99+</template>
      </ve-plugin>
    </template>
    <template #api>
      <ve-stats :stats="stats"/>
      <ve-incident :incident="incident"/>
      <ve-slots :slots="slots"/>
    </template>
    <template #warn>
      <p>该组件是基于element-plus开发，需要在此基础上使用。</p>
    </template>
  </ve-page>
</template>

<style lang="scss" scoped>

</style>
