<!--
批量上传图片
上传支持两种类型，配合环境变量使用
type=local，上传采用本地文件管理
type=gridFs，上传采用mongodb文件管理
-->
<script lang="ts" setup>
import {onMounted, ref, watch} from 'vue'
import {Delete, Plus, ZoomIn} from '@element-plus/icons-vue'

import type {UploadFile} from 'element-plus'
import {ElMessage, UploadFiles, UploadRawFile} from "element-plus";
import {useI18n} from "vue-i18n";
import {resData} from "@/entity/res";
import {getDefaultSession} from "@/assets/js/sessionStorageUtils";
import {spliceMongodbUrl} from "@/assets/js/common";
import {FileInfo} from "@/entity/base/FileInfo";

// type：上传类型，默认支持传入‘local’，‘gridFs’
// fileList：上传类型为‘local’，则为文件地址；上传类型为‘gridFs’，则为文件id
const prop = defineProps({
  fileList: {
    type: Array as () => Array<FileInfo>,
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

const dialogImageUrl = ref('')
const dialogTitle = ref('')
const dialogVisible = ref(false)
const disabled = ref(false)

let _fileList = ref<FileInfo[]>()
watch(() => prop.fileList, () => {
  _fileList = ref<FileInfo[]>(prop.fileList)
  if (prop.type === 'gridFs') {
    _fileList.value.forEach(item => {
      item.tempUrl = spliceMongodbUrl(item.url)
    })
  }
})

const emits = defineEmits(['handleSuccess', 'handleRemove'])

const handleSuccess = (response: resData, uploadFile: UploadFile, uploadFiles: UploadFiles) => {
  emits('handleSuccess', response, uploadFile, uploadFiles)
}

const handleRemove = (file: UploadFile) => {
  _fileList.value = _fileList.value.filter((item) => {
    if (item.uid !== file.uid) {
      return item;
    }
  })
  emits('handleRemove', _fileList.value)
}

const handlePictureCardPreview = (file: FileInfo) => {
  dialogImageUrl.value = file.tempUrl! || file.url!
  dialogTitle.value = file.name!
  dialogVisible.value = true
}

const beforeUpload = (rawFile: UploadRawFile) => {
  if (rawFile.size > 1024 * 1024 * 2) {
    ElMessage.warning(t('message.onlyFilesSmallerThanNumMbCanBeUploaded', [t('message.two')]))
    return false
  }
}

const clear = () => {
  _fileList.value = []
}

defineExpose({
  clear
})
</script>

<template>
  <el-upload
      v-model:file-list="_fileList"
      :action="api"
      :before-upload="beforeUpload"
      :headers="{
        token: getDefaultSession('token')
      }"
      :on-success="handleSuccess"
      accept="image/*"
      list-type="picture-card">
    <el-icon>
      <Plus/>
    </el-icon>

    <template #file="{ file }">
      <div>
        <img :src="file.tempUrl||file.url" alt="" class="el-upload-list__item-thumbnail"/>
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

<style lang="less" scoped>

</style>
