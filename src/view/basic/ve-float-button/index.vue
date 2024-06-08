<script lang="ts" setup>
import VePage from '@/components/ve-page/index.vue'
import VeFloatButton from '@/components/ve-float-button/index.vue'
import {reactive} from "vue";
import {Btn} from "@/components/ve-float-button/Btn";

const foldBtn = reactive<Btn[]>([
  {
    key: '1',
    icon: 'Link',
    plain: true,
    size: 'large'
  },
  {
    key: '2',
    icon: 'ChatLineRound',
    plain: true,
    size: 'large'
  },
])

const handleFoldClick = (key: string) => {
  console.log(key)
}

const handleOpenClick = () => {
  console.log('点击了open-btn')
}

const incident = [
  {
    name: 'handle-open-click',
    instructions: '点击打开按钮回调事件',
    callback: 'openBtn：key',
  },
  {
    name: 'handle-fold-click',
    instructions: '点击菜单中的按钮回调事件',
    callback: 'foldBtn：key',
  },
]

const stats = [
  {
    name: 'open-btn：key',
    instructions: '按钮键值，点击回调事件会返回该值',
    type: 'string',
    optional: '-',
    default: '-',
  },
  {
    name: 'open-btn：type',
    instructions: '按钮属性',
    type: 'string',
    optional: 'primary，success，warning，danger，info',
    default: '-',
  },
  {
    name: 'open-btn：plain',
    instructions: '是否为朴素按钮',
    type: 'boolean',
    optional: 'true，false',
    default: 'false',
  },
  {
    name: 'open-btn：shape',
    instructions: '按钮形状',
    type: 'string',
    optional: 'round，circle',
    default: '-',
  },
  {
    name: 'open-btn：disabled',
    instructions: '按钮是否为禁用状态',
    type: 'boolean',
    optional: 'true，false',
    default: 'false',
  },
  {
    name: 'open-btn：icon',
    instructions: '图标组件',
    type: 'string/Component',
    optional: '-',
    default: '-',
  },
  {
    name: 'open-btn：size',
    instructions: '尺寸',
    type: 'string',
    optional: 'large，default，small',
    default: '-',
  },
  {
    name: 'open-btn：description',
    instructions: '按钮文字，shape属性值不为 circle 时生效',
    type: 'string',
    optional: '-',
    default: '-',
  },
  {
    name: 'open-btn：tooltip',
    instructions: 'tooltip描述文字',
    type: 'string',
    optional: '-',
    default: '-',
  },
  {
    name: 'open-btn：badge',
    instructions: 'badge显示值',
    type: 'string',
    optional: '-',
    default: '-',
  },
  {
    name: 'open-btn：isDot',
    instructions: '是否显示小圆点',
    type: 'boolean',
    optional: 'true，false',
    default: 'false',
  },
  {
    name: 'open-btn：show',
    instructions: '菜单默认展开show，该属性需要配合fold-btn一起使用',
    type: 'boolean',
    optional: 'true，false',
    default: 'false',
  },
  {
    name: 'fold-btn',
    instructions: '该属性为菜单组，属性于open-btn的数据一致，按钮形状依附于open-btn：icon',
    type: 'array',
    optional: '-',
    default: '-',
  },
]

</script>

<template>
  <div class="ve-float-button">
    <ve-page id="ve-float-button" pm-id="4d869c714dfd15edba5b0695a7b7c733" title="悬浮按钮">
      <template #default>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-card class="my-page">
              <el-divider content-position="left">最简单的用法。</el-divider>
              <ve-float-button :open-btn="{shape:'circle', size: 'large'}" @handle-open-click="handleOpenClick"/>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card class="my-page">
              <el-divider content-position="left">通过 type 改变悬浮按钮的类型。</el-divider>
              <ve-float-button
                  :open-btn="{type:'primary',shape:'circle', size: 'large'}"
                  @handle-open-click="handleOpenClick"/>
              <ve-float-button
                  :open-btn="{shape:'circle', size: 'large'}"
                  style="right: 94px"
                  @handle-open-click="handleOpenClick"/>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card class="my-page">
              <el-divider content-position="left">通过 shape 设置不同的形状。</el-divider>
              <ve-float-button
                  :open-btn="{type:'primary', size:'large'}"
                  @handle-open-click="handleOpenClick"/>
              <ve-float-button
                  :open-btn="{type:'primary', shape: 'round', size:'large'}"
                  style="right: 94px"
                  @handle-open-click="handleOpenClick"/>
              <ve-float-button
                  :open-btn="{type:'primary', shape: 'circle', size:'large'}"
                  style="right: 164px"
                  @handle-open-click="handleOpenClick"/>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card class="my-page">
              <el-divider content-position="left">可以通过 description 设置文字内容。</el-divider>
              <el-alert :closable="false"
                        description="仅当 shape 属性为 default 和 round 时支持。由于空间较小，推荐使用比较精简的双数文字。"
                        show-icon
                        type="warning"></el-alert>
              <ve-float-button
                  :open-btn="{type:'primary', size:'large', description:'描述'}"
                  @handle-open-click="handleOpenClick"/>
              <ve-float-button
                  :open-btn="{type:'primary', shape: 'round', size:'large', description:'描述'}"
                  style="right: 164px"
                  @handle-open-click="handleOpenClick"/>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card class="my-page">
              <el-divider content-position="left">设置 tooltip 属性，即可开启气泡卡片。</el-divider>
              <ve-float-button
                  :open-btn="{shape:'circle', size: 'large', tooltip: '描述信息'}"
                  @handle-open-click="handleOpenClick"/>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card class="my-page">
              <el-divider content-position="left">浮动按钮组。</el-divider>
              <ve-float-button
                  :fold-btn="foldBtn" :open-btn="{shape:'circle', size: 'large', show: true}"
                  @handle-fold-click="handleFoldClick"
                  @handle-open-click="handleOpenClick"/>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card class="my-page">
              <el-divider content-position="left">菜单模式，提供 click 触发方式。</el-divider>
              <ve-float-button
                  :fold-btn="foldBtn" :open-btn="{shape:'circle', size: 'large'}"
                  @handle-fold-click="handleFoldClick"
                  @handle-open-click="handleOpenClick"/>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card class="my-page">
              <el-divider content-position="left">徽标数，右上角附带圆形徽标数字的悬浮按钮。</el-divider>
              <ve-float-button
                  :open-btn="{shape:'circle', size: 'large', badge: '12'}"
                  @handle-open-click="handleOpenClick"/>
              <ve-float-button
                  :open-btn="{shape:'circle', size: 'large', isDot: true}"
                  style="right: 94px"
                  @handle-open-click="handleOpenClick"/>
              <ve-float-button
                  :open-btn="{shape:'circle', size: 'large', badge: 'new'}"
                  style="right: 164px"
                  @handle-open-click="handleOpenClick"/>
            </el-card>
          </el-col>
        </el-row>
      </template>
      <template #api>
        <ve-stats :stats="stats"/>
        <ve-incident :incident="incident"/>
      </template>
      <template #warn>
        <p>该组件是基于element-plus开发，需要在此基础上使用。</p>
      </template>
    </ve-page>
  </div>
</template>

<style lang="scss" scoped>
.ve-float-button {
  .my-page {
    position: relative;
    height: 300px;
    margin-bottom: 20px;
  }
}
</style>
