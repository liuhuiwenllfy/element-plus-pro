<script lang="ts" setup>
import {PropType, reactive, ref, watch} from 'vue'
import {ElAvatar, ElButton, ElDialog, ElIcon, ElMessage, ElUpload, type UploadFile, UploadRawFile} from 'element-plus'
import {Plus} from '@element-plus/icons-vue'
import 'element-plus/es/components/message/style/css'
import 'element-plus/es/components/upload/style/css'
import 'element-plus/es/components/avatar/style/css'
import 'element-plus/es/components/icon/style/css'
import VeCropperShear from 've-cropper-shear/index.vue'
import axios from 'axios'
import 'element-plus/es/components/dialog/style/css'
import 'element-plus/es/components/button/style/css'

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
  file: {
    type: String,
    required: false,
    default: () => ''
  },
  isCropper: {
    type: Boolean,
    required: false,
    default: () => false
  }
})

const _file = ref()

watch(()=>props.file, ()=>{
  _file.value = props.file
})

// 回调函数声明
const emits = defineEmits(['handleSuccess'])

// 上传成功回调
const handleSuccess = (response: any, uploadFile: UploadFile) => {
  emits('handleSuccess', response, uploadFile)
}
const showCropper = ref(false)
const cropperImg = ref()
const cropperImgData = ref()
const cropperImgBlob = ref()
const cropper = ref()

// 上传之前校验文件
// 文件大小不能超过2MB
const beforeAvatarUpload = (rawFile: UploadRawFile | null) => {
  if (rawFile) {
    if (rawFile.size / 1024 / 1024 > props.uploadSize) {
      ElMessage.error(content.imageMax2MB[props.language])
      return false
    }
    if (props.isCropper) {
      const reader = new FileReader();
      reader.onload = (e) => {
        //@ts-ignore
        cropperImg.value = e.target.result
      };
      reader.readAsDataURL(rawFile);
      showCropper.value = true
      return false
    }
    return true
  } else {
    cropper.value.getCropData()
    cropper.value.getCropBlob()
    showCropper.value = false
    return false
  }
}

watch(()=>cropperImgBlob.value, ()=>{
  const file = new File([cropperImgBlob.value], 'image.png', {type: 'image/png'});
  const form = new FormData()
  form.append('file', file)
  //@ts-ignore
  axios.post(props.api, form, {
    headers: {
      'Content-Type': 'multipart/form-data',
      authorization: props.authorization
    }
  }).then((res) => {
    const uploadFile: UploadFile = {
      name: file.name,
      response: res.data,
      size: file.size,
      status: 'success',
      uid: new Date().getTime(),
    }
    _file.value = cropperImgData.value
    handleSuccess(res.data, uploadFile)
  }).catch((error) => console.log(error))
})

const content = reactive<any>({
  imageMax2MB: {
    zhCn: `图片大小不能超过 ${props.uploadSize}MB`,
    en: `Image size cannot exceed ${props.uploadSize}mb`
  },
  reset: {
    zhCn: '清空',
    en: `reset`
  },
  confirm: {
    zhCn: '确认',
    en: `confirm`
  },
})
</script>

<template>
  <el-upload
      :action="api"
      :before-upload="beforeAvatarUpload"
      :headers="{
        authorization: authorization
      }"
      :on-success="handleSuccess"
      :show-file-list="false"
      accept="image/*"
      class="ve-upload-avatar">
    <el-avatar v-if="_file" :src="_file" class="avatar" size="large"/>
    <el-icon v-else class="avatar-uploader-icon">
      <Plus/>
    </el-icon>
  </el-upload>

  <el-dialog v-model="showCropper" width="750">
    <ve-cropper-shear ref="cropper" :img="cropperImg" @get-crop-blob="cropperImgBlob = $event" @get-crop-data="cropperImgData = $event"/>
    <template #footer>
      <span>
        <el-button @click="showCropper = false">{{ content.reset[language] }}</el-button>
        <el-button type="primary" @click="beforeAvatarUpload(null)">{{ content.confirm[language] }}</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped>

</style>
<style lang="scss">
.ve-upload-avatar .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.ve-upload-avatar .el-upload:hover {
  border-color: var(--el-color-primary);
}

.ve-upload-avatar .el-icon.avatar-uploader-icon {
  font-size: 16px;
  color: #8c939d;
  width: 56px;
  height: 56px;
  text-align: center;
}
</style>
