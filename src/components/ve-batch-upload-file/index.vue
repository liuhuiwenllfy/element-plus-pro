<!--
批量上传文件
上传支持两种类型，配合环境变量使用
type=local，上传采用本地文件管理
type=gridFs，上传采用mongodb文件管理
-->
<script lang="ts" setup>
import {UploadFilled} from '@element-plus/icons-vue'

import type {UploadFile, UploadFiles, UploadProgressEvent, UploadRawFile} from 'element-plus'
import {ElMessage, UploadUserFile} from "element-plus";
import {onMounted, ref, watch} from "vue";
import {useI18n} from "vue-i18n";
import {resData} from "@/entity/res";
import {getDefaultSession} from "@/assets/js/sessionStorageUtils";

// type：上传类型，默认支持传入‘local’，‘gridFs’
// fileList：上传类型为‘local’，则为文件地址；上传类型为‘gridFs’，则为文件id
const prop = defineProps({
  fileList: {
    type: Array as () => Array<UploadUserFile>,
    required: true,
    default: () => []
  },
  type: {
    type: String,
    required: false,
    default: () => 'local'
  }
})

// 初始化获取上传地址
onMounted(() => {
  getApi()
})

const api = ref('#')
const getApi = () => {
  if (prop.type === 'local') {
    //@ts-ignore
    api.value = import.meta.env.VITE_UPLOAD_LOCAL_IMAGE_URL
  }
  if (prop.type === 'gridFs') {
    //@ts-ignore
    api.value = import.meta.env.VITE_UPLOAD_GRIDFS_URL
  }
}

const {t} = useI18n()
let fileList = ref<UploadUserFile[]>()
watch(() => prop.fileList, () => {
  fileList = ref<UploadUserFile[]>(prop.fileList)
})

const emits = defineEmits(['handleSuccess', 'beforeRemove'])

const onSuccess = (response: resData, uploadFile: UploadFile, uploadFiles: UploadFiles) => {
  emits('handleSuccess', response, uploadFile, uploadFiles)
}
const onError = (error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => {
  console.log(error)
  console.log(uploadFile)
  console.log(uploadFiles)
}
const onProgress = (evt: UploadProgressEvent, uploadFile: UploadFile, uploadFiles: UploadFiles) => {
  console.log(evt)
  console.log(uploadFile)
  console.log(uploadFiles)
}

const clear = () => {
  fileList.value = []
}

defineExpose({
  clear
})
const beforeUpload = (rawFile: UploadRawFile) => {
  if (rawFile.size > 1024 * 1024 * 100) {
    ElMessage.warning(t('message.onlyFilesSmallerThanNumMbCanBeUploaded', [t('message.oneHundred')]))
    return false
  }
}

const beforeRemove = (rawFile: UploadRawFile) => {
  fileList.value.forEach((item) => {
    if (item.uid !== rawFile.uid) {
      return item;
    }
  })
  emits('beforeRemove', fileList.value)
}
</script>

<template>
  <el-upload
      v-model:file-list="fileList"
      :action="api"
      :before-remove="beforeRemove"
      :before-upload="beforeUpload"
      :headers="{
        token: getDefaultSession('token')
      }"
      :on-error="onError"
      :on-progress="onProgress"
      :on-success="onSuccess"
      class="ve-batch-upload-file"
      drag
      multiple>
    <el-icon class="el-icon--upload">
      <upload-filled/>
    </el-icon>
    <div class="el-upload__text">
      {{ $t('message.dragAndDropFilesHereOr') }}&nbsp;<em>{{ $t('message.clickUpload') }}</em>
    </div>
    <template #tip>
      <div class="el-upload__tip">
        {{ $t('message.filesLessThanNumMbInSize', [$t('message.oneHundred')]) }}
      </div>
    </template>
  </el-upload>
</template>

<style lang="less" scoped>
.ve-batch-upload-file {
  width: 100%;
}
</style>
