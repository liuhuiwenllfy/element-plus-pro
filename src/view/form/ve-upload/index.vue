<script lang="ts" setup>
import VePage from '@/components/ve-page/index.vue'
import VeBatchUploadFile from '@/components/ve-upload/ve-batch-upload-file/index.vue'
import VeBatchUploadPicture from '@/components/ve-upload/ve-batch-upload-picture/index.vue'
import VeUploadAvatar from '@/components/ve-upload/ve-upload-avatar/index.vue'
import VeUploadPicture from '@/components/ve-upload/ve-upload-picture/index.vue'
import code from './index.md?raw'
import {UploadFile} from "element-plus";
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
    instructions: '是否开启裁剪功能，该功能暂时仅支持单文件上传组件',
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
const file = ref()
const handleUploadSuccess = (response: any, uploadFile: UploadFile) => {
  console.log(response.data)
  file.value = response.data
}
</script>

<template>
  <ve-page id="ve-upload" :code="code" :incident="incident" :stats="stats" title="ve-upload 上传">
    <template #default>
      <h3>批量上传文件</h3>
      <ve-batch-upload-file
          api="/single-upload/gridFsFile/uploadTempFile"
          authorization="Bearer eyJraWQiOiI1ZWM3MGFlMWQ3M2Y0NmRjYmMwZjY5Yzg3NjE2OWYyMCIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJzeXNhZG1pbiIsImF1ZCI6Im1lc3NhZ2luZy1jbGllbnQiLCJuYmYiOjE3MjEyMjkzNTcsInNjb3BlIjpbImFsbCJdLCJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMTIiLCJleHAiOjE3MjEyMzY1NTcsImlhdCI6MTcyMTIyOTM1N30.b0tETuGkNBhXJOrBZ1wObmAQdotbcZUmlA5ZMyx4tZDZuJqIf1GOWMFtMXyiQOgI4bEsfAs1ellykkHMpYK9Agrc-NDjfjZbUzD4WokNEPbc-6TcF54z4uYQFKB67dwx3DRFmF7seWK8xHVElsZn-giUn19IHkxucYoWf7ZV374P5Heggr8ryUwGtv1P013n8ICcMrfPWCKuQZ5vIjWbuYXPMRuvIoGAKD_B8y5XPIDUsiuvcN5JEvUK_RAn44D4tNHS-EnVbsVR7rC6IukcArpIaQZNC7EktDEOHvf2IGJbuL6ngPVraxmXLU_5pFAwh82YczO228v8c_4cXuBGRA"
      />
      <h3>批量上传图片</h3>
      <ve-batch-upload-picture
          api="/single-upload/gridFsFile/uploadTempFile"
          authorization="Bearer eyJraWQiOiI1ZWM3MGFlMWQ3M2Y0NmRjYmMwZjY5Yzg3NjE2OWYyMCIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJzeXNhZG1pbiIsImF1ZCI6Im1lc3NhZ2luZy1jbGllbnQiLCJuYmYiOjE3MjEyMjkzNTcsInNjb3BlIjpbImFsbCJdLCJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMTIiLCJleHAiOjE3MjEyMzY1NTcsImlhdCI6MTcyMTIyOTM1N30.b0tETuGkNBhXJOrBZ1wObmAQdotbcZUmlA5ZMyx4tZDZuJqIf1GOWMFtMXyiQOgI4bEsfAs1ellykkHMpYK9Agrc-NDjfjZbUzD4WokNEPbc-6TcF54z4uYQFKB67dwx3DRFmF7seWK8xHVElsZn-giUn19IHkxucYoWf7ZV374P5Heggr8ryUwGtv1P013n8ICcMrfPWCKuQZ5vIjWbuYXPMRuvIoGAKD_B8y5XPIDUsiuvcN5JEvUK_RAn44D4tNHS-EnVbsVR7rC6IukcArpIaQZNC7EktDEOHvf2IGJbuL6ngPVraxmXLU_5pFAwh82YczO228v8c_4cXuBGRA"
          is-cropper/>
      <h3>上传头像</h3>
      <ve-upload-avatar
          api="/single-upload/gridFsFile/uploadTempFile"
          authorization="Bearer eyJraWQiOiI1ZWM3MGFlMWQ3M2Y0NmRjYmMwZjY5Yzg3NjE2OWYyMCIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJzeXNhZG1pbiIsImF1ZCI6Im1lc3NhZ2luZy1jbGllbnQiLCJuYmYiOjE3MjEyMjkzNTcsInNjb3BlIjpbImFsbCJdLCJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMTIiLCJleHAiOjE3MjEyMzY1NTcsImlhdCI6MTcyMTIyOTM1N30.b0tETuGkNBhXJOrBZ1wObmAQdotbcZUmlA5ZMyx4tZDZuJqIf1GOWMFtMXyiQOgI4bEsfAs1ellykkHMpYK9Agrc-NDjfjZbUzD4WokNEPbc-6TcF54z4uYQFKB67dwx3DRFmF7seWK8xHVElsZn-giUn19IHkxucYoWf7ZV374P5Heggr8ryUwGtv1P013n8ICcMrfPWCKuQZ5vIjWbuYXPMRuvIoGAKD_B8y5XPIDUsiuvcN5JEvUK_RAn44D4tNHS-EnVbsVR7rC6IukcArpIaQZNC7EktDEOHvf2IGJbuL6ngPVraxmXLU_5pFAwh82YczO228v8c_4cXuBGRA"
          :file="file"
          is-cropper
          @handle-success="handleUploadSuccess"/>
      <h3>上传图片</h3>
      <ve-upload-picture
          api="/single-upload/gridFsFile/uploadTempFile"
          authorization="Bearer eyJraWQiOiI1ZWM3MGFlMWQ3M2Y0NmRjYmMwZjY5Yzg3NjE2OWYyMCIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJzeXNhZG1pbiIsImF1ZCI6Im1lc3NhZ2luZy1jbGllbnQiLCJuYmYiOjE3MjEyMjkzNTcsInNjb3BlIjpbImFsbCJdLCJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMTIiLCJleHAiOjE3MjEyMzY1NTcsImlhdCI6MTcyMTIyOTM1N30.b0tETuGkNBhXJOrBZ1wObmAQdotbcZUmlA5ZMyx4tZDZuJqIf1GOWMFtMXyiQOgI4bEsfAs1ellykkHMpYK9Agrc-NDjfjZbUzD4WokNEPbc-6TcF54z4uYQFKB67dwx3DRFmF7seWK8xHVElsZn-giUn19IHkxucYoWf7ZV374P5Heggr8ryUwGtv1P013n8ICcMrfPWCKuQZ5vIjWbuYXPMRuvIoGAKD_B8y5XPIDUsiuvcN5JEvUK_RAn44D4tNHS-EnVbsVR7rC6IukcArpIaQZNC7EktDEOHvf2IGJbuL6ngPVraxmXLU_5pFAwh82YczO228v8c_4cXuBGRA"
          :file="file"
          is-cropper
          @handle-success="handleUploadSuccess"/>
    </template>
  </ve-page>
</template>

<style lang="scss" scoped>
</style>
