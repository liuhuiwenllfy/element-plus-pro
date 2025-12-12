<script lang="ts" setup>
import VeCropperShear from '@/components/ve-cropper-shear/index.vue'
import VePage from '@/components/ve-page/index.vue'
import readme from './index.md?raw'
import {reactive} from "vue";
import json from '@/components/ve-cropper-shear/package.json'

const _list = reactive([
  [1, 1],
  [16, 9]
])

const stats = [
  {
    name: 'img',
    instructions: 'base64图片',
    type: 'string',
    optional: '-',
    default: '-',
  },
  {
    name: 'fixed',
    instructions: '是否开启截图框宽高固定比例',
    type: 'boolean',
    optional: '-',
    default: '-',
  },
  {
    name: 'fixedNumber',
    instructions: '截图框的宽高比例, 开启fixed生效',
    type: 'Array',
    optional: '-',
    default: '[1, 1]',
  },
  {
    name: 'fixedNumberList',
    instructions: '截图框的宽高比例可选项, 开启fixed生效',
    type: 'Array',
    optional: '-',
    default: '[[1, 1]]',
  }
]

const incident = [
  {
    name: 'getCropData',
    instructions: '通过ref主动调用事件，触发获取图片回调',
    callback: '-',
  },
  {
    name: 'getCropBlob',
    instructions: '通过ref主动调用事件，触发获取图片回调',
    callback: '-',
  },
  {
    name: 'get-crop-data',
    instructions: '获取图片信息',
    callback: 'base64图片',
  },
  {
    name: 'get-crop-blob',
    instructions: '获取图片信息',
    callback: 'blob图片',
  },
]
</script>

<template>
  <ve-page :readme="readme" :incident="incident" :stats="stats" :json="json">
    <template #default>
      <ve-cropper-shear :fixed-number-list="_list" img="avatar.png"/>
    </template>
  </ve-page>
</template>

<style lang="scss" scoped>
</style>
