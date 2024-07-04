<script lang="ts" setup>
import {PropType, reactive, ref, watch} from 'vue'
import type {UploadInstance} from 'element-plus'
import {ElAvatar, ElIcon, ElMessage, ElUpload, UploadRawFile} from 'element-plus'
import {Plus} from '@element-plus/icons-vue'
import 'element-plus/es/components/message/style/css'
import 'element-plus/es/components/upload/style/css'
import 'element-plus/es/components/avatar/style/css'
import 'element-plus/es/components/icon/style/css'
import VeCropper from '@/components/ve-cropper/index.vue'
import axios from 'axios'

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

const _file = ref('')

// 监听 file变化，同步预览图变化
watch(() => props.file, async () => {
  _file.value = props.file
})

// 回调函数声明
const emits = defineEmits(['handleSuccess'])

// 上传成功回调
const handleSuccess = (response: any) => {
  emits('handleSuccess', response)
}
const showCropper = ref(false)
const cropperImg = ref()
const cropperImgBlob = ref()
const cropper = ref()
const uploadRef = ref<UploadInstance>()

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
        cropperImg.value = e.target.result
      };
      reader.readAsDataURL(rawFile);
      showCropper.value = true
      return false
    }
    return true
  } else {
    cropper.value.getCropBlob()
    showCropper.value = false
    const file = new File([cropperImgBlob], 'image.png', {type: 'image/png'});
    const form = new FormData()
    form.append('file', file)
    //@ts-ignore
    axios.post(props.api, form, {
      headers: {
        'Content-Type': 'multipart/form-data',
        authorization: props.authorization
      }
    }).then((res) => console.log(res)).catch((error) => console.log(error))
    return false
  }
}

const content = reactive<any>({
  imageMax2MB: {
    zhCn: `图片大小不能超过 ${props.uploadSize}MB`,
    en: `Image size cannot exceed ${props.uploadSize}mb`
  },
})
</script>

<template>
  <el-upload
      ref="uploadRef"
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
    <ve-cropper ref="cropper" :img="cropperImg" @get-crop-blob="cropperImgBlob = $event"/>
    <template #footer>
      <span>
        <el-button @click="showCropper = false">{{ $t('message.reset') }}</el-button>
        <el-button type="primary" @click="beforeAvatarUpload(null)">{{
            $t('message.confirm')
          }}</el-button>
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
