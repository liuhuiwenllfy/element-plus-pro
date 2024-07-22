<script lang="ts" setup>
import {UploadFilled} from '@element-plus/icons-vue'

import type {UploadFile, UploadFiles, UploadRawFile} from 'element-plus'
import {ElIcon, ElMessage, ElUpload} from 'element-plus'
import {PropType, reactive, ref, watch} from "vue";
import 'element-plus/es/components/icon/style/css'
import 'element-plus/es/components/message/style/css'
import 'element-plus/es/components/upload/style/css'

const props = defineProps({
  // 服务器地址
  api: {
    type: String,
    required: true
  },
  // token
  authorization: {
    type: String,
    required: false,
    default: () => ''
  },
  // 国际化 'zhCn'|'en'
  language: {
    type: String as PropType<'zhCn' | 'en' | string>,
    required: false,
    default: () => 'zhCn'
  },
  // 上传大小 单位MB
  uploadSize: {
    type: Number,
    required: false,
    default: () => 100
  },
  fileList: {
    type: Array as () => Array<UploadFile>,
    required: false,
    default: () => []
  }
})

let _fileList = ref<UploadFile[]>()

watch(()=>props.fileList, ()=>{
  _fileList.value = props.fileList
}, {deep: true})

const emits = defineEmits(['handleSuccess', 'handleRemove'])

const onSuccess = (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => {
  emits('handleSuccess', uploadFile, uploadFiles, response)
}

const beforeUpload = (rawFile: UploadRawFile) => {
  if (rawFile.size > 1024 * 1024 * props.uploadSize) {
    ElMessage.warning(content.onlyFilesSmallerThanNumMbCanBeUploaded[props.language])
    return false
  }
}

const handleRemove = (file: UploadFile) => {
  _fileList.value = _fileList.value.filter(item => item.uid !== file.uid)
  //@ts-ignore
  emits('handleRemove', file)
}


const content = reactive<any>({
  onlyFilesSmallerThanNumMbCanBeUploaded: {
    zhCn: `只能上传小于 ${props.uploadSize}MB 的文件`,
    en: `Only files smaller than ${props.uploadSize}mb can be uploaded`
  },
  dragAndDropFilesHereOrClickUpload: {
    zhCn: '将文件拖放到此处或单击上传',
    en: 'Drag and drop files here or click upload'
  },
  filesLessThanNumMbInSize: {
    zhCn: `大小小于 ${props.uploadSize}MB 的文件`,
    en: `Files less than ${props.uploadSize}mb in size`
  },
})
</script>

<template>
  <el-upload
      v-model:file-list="_fileList"
      :action="api"
      :before-upload="beforeUpload"
      :handle-remove="handleRemove"
      :headers="{
        authorization: authorization
      }"
      :on-success="onSuccess"
      class="ve-batch-upload-file"
      drag
      multiple>
    <el-icon class="el-icon--upload">
      <upload-filled/>
    </el-icon>
    <div class="el-upload__text">
      {{ content.dragAndDropFilesHereOrClickUpload[language] }}
    </div>
    <template #tip>
      <div class="el-upload__tip">
        {{ content.filesLessThanNumMbInSize[language] }}
      </div>
    </template>
  </el-upload>
</template>

<style lang="scss" scoped>

</style>
