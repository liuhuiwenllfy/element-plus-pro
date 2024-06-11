<script lang="ts" setup>
import {PropType, reactive, ref, watch} from 'vue'
import {Delete, Plus, ZoomIn} from '@element-plus/icons-vue'

import type {UploadFile, UploadFiles, UploadRawFile} from 'element-plus'
import {ElDialog, ElIcon, ElMessage, ElUpload} from "element-plus";
import 'element-plus/es/components/upload/style/css'
import 'element-plus/es/components/message/style/css'
import 'element-plus/es/components/dialog/style/css'
import 'element-plus/es/components/icon/style/css'

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

watch(() => props.fileList, () => {
  _fileList.value = props.fileList
})

const dialogImageUrl = ref('')
const dialogTitle = ref('')
const dialogVisible = ref(false)
const disabled = ref(false)

const emits = defineEmits(['handleSuccess', 'handleRemove'])

const handleSuccess = (response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => {
  emits('handleSuccess', uploadFile, uploadFiles, response)
}

const handleRemove = (file: UploadFile) => {
  emits('handleRemove', file)
}

const handlePictureCardPreview = (file: UploadFile) => {
  //@ts-ignore
  dialogImageUrl.value = file.url
  dialogTitle.value = file.name
  dialogVisible.value = true
}

const beforeUpload = (file: UploadRawFile) => {
  //@ts-ignore
  if (file.size > 1024 * 1024 * props.uploadSize) {
    ElMessage.warning(content.onlyFilesSmallerThanNumMbCanBeUploaded[props.language])
    return false
  }
}

const content = reactive<any>({
  onlyFilesSmallerThanNumMbCanBeUploaded: {
    zhCn: `只能上传小于 ${props.uploadSize}MB 的文件`,
    en: `Only files smaller than ${props.uploadSize}mb can be uploaded`
  },
})
</script>

<template>
  <el-upload
      v-model:file-list="_fileList"
      :action="api"
      :before-upload="beforeUpload"
      :headers="{
        authorization: authorization
      }"
      :on-success="handleSuccess"
      accept="image/*"
      list-type="picture-card">
    <el-icon>
      <Plus/>
    </el-icon>

    <template #file="{ file }">
      <div>
        <img :src="file.url" alt="" class="el-upload-list__item-thumbnail"/>
        <span class="el-upload-list__item-actions">
          <span
              class="el-upload-list__item-preview"
              @click="handlePictureCardPreview(file)">
            <el-icon><zoom-in/></el-icon>
          </span>
          <span
              v-if="!disabled"
              class="el-upload-list__item-delete"
              @click="handleRemove(file)">
            <el-icon><Delete/></el-icon>
          </span>
        </span>
      </div>
    </template>
  </el-upload>

  <el-dialog v-model="dialogVisible" :title="dialogTitle" draggable top="10vh">
    <img :src="dialogImageUrl" alt="Preview Image" style="width: 100%"/>
  </el-dialog>
</template>

<style lang="scss" scoped>

</style>
