<script lang="ts" setup>
import VePage from '@/components/ve-page/index.vue'
import VeBatchUploadFile from '@/components/ve-upload/ve-batch-upload-file/index.vue'
import VeBatchUploadPicture from '@/components/ve-upload/ve-batch-upload-picture/index.vue'
import VeUploadAvatar from '@/components/ve-upload/ve-upload-avatar/index.vue'
import VeUploadPicture from '@/components/ve-upload/ve-upload-picture/index.vue'
import code from './index.md?raw'
import {ref} from "vue";

const stats = [
  {
    name: 'api',
    instructions: '上传接口',
    type: 'string',
    optional: '-',
    default: '-',
  },
  {
    name: 'authorization',
    instructions: '上传token',
    type: 'string',
    optional: '-',
    default: '-',
  },
  {
    name: 'language',
    instructions: '国际化',
    type: 'string',
    optional: 'zhCN | en',
    default: 'zhCN',
  },
  {
    name: 'uploadSize',
    instructions: '上传大小',
    type: 'number',
    optional: '-',
    default: '100',
  },
  {
    name: 'fileList',
    instructions: '文件集合',
    type: 'array<UploadFile>',
    optional: '-',
    default: '[]',
  },
  {
    name: 'file',
    instructions: '文件',
    type: 'string',
    optional: '-',
    default: '-',
  },
  {
    name: 'is-cropper',
    instructions: '是否开启裁剪功能',
    type: 'boolean',
    optional: 'true：开启；false：关闭',
    default: 'false',
  },
]

const incident = [
  {
    name: 'handle-success',
    instructions: '上传成功回调',
    callback: 'uploadFile, uploadFiles, response',
  },
  {
    name: 'handle-remove',
    instructions: '删除成功回调',
    callback: 'file',
  },
]

</script>

<template>
  <ve-page id="ve-upload" :code="code" :incident="incident" :stats="stats" title="ve-upload 上传">
    <template #default>
      <h3>批量上传文件</h3>
      <ve-batch-upload-file api="#"/>
      <h3>批量上传图片</h3>
      <ve-batch-upload-picture api="#" is-cropper/>
      <h3>上传头像</h3>
      <ve-upload-avatar api="#" is-cropper/>
      <h3>上传图片</h3>
      <ve-upload-picture api="#" is-cropper/>
    </template>
  </ve-page>
</template>

<style lang="scss" scoped>
</style>
