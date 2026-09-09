<script lang="ts" setup>
import {PropType, reactive, ref, watch} from 'vue'
import {ElButton, ElDialog, ElIcon, ElMessage, ElUpload, type UploadFile, UploadRawFile} from 'element-plus'
import {Plus} from '@element-plus/icons-vue'
import 'element-plus/es/components/message/style/css'
import 'element-plus/es/components/upload/style/css'
import 'element-plus/es/components/icon/style/css'
import 'element-plus/es/components/dialog/style/css'
import 'element-plus/es/components/button/style/css'
import axios from "axios";
import VeCropperShear from 've-cropper-shear/index.vue'
import VeWatermarkRemove from '../ve-watermark-remove/index.vue'

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
  },
  // 是否开启去水印功能
  isWatermark: {
    type: Boolean,
    required: false,
    default: () => false
  },
  fixedNumber: {
    type: Array<any>,
    required: false,
    default: () => [1, 1]
  },
  fixedNumberList: {
    type: Array<any>,
    default: () => [[1, 1]]
  }
})

const _file = ref()

watch(() => props.file, () => {
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

const showWatermark = ref(false)
const watermarkKey = ref(0)
const watermarkImg = ref()
const watermarkComp = ref()
const watermarkApplying = ref(false)

/** 将处理好的 Blob 上传到服务端 */
const uploadFile = (blob: Blob, dataUrl: string) => {
  const file = new File([blob], 'image.png', {type: 'image/png'});
  const form = new FormData()
  form.append('file', file)
  // @ts-ignore
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
    _file.value = dataUrl
    handleSuccess(res.data, uploadFile)
  }).catch((error) => console.log(error))
}

// 上传之前校验文件
const beforeAvatarUpload = (rawFile: UploadRawFile | null) => {
  if (rawFile) {
    if (rawFile.size / 1024 / 1024 > props.uploadSize) {
      ElMessage.error(content.imageMax2MB[props.language])
      return false
    }
    if (props.isWatermark) {
      const reader = new FileReader();
      reader.onload = (e) => {
        // @ts-ignore
        watermarkImg.value = e.target.result
      };
      reader.readAsDataURL(rawFile);
      watermarkKey.value++
      showWatermark.value = true
      return false
    }
    if (props.isCropper) {
      const reader = new FileReader();
      reader.onload = (e) => {
        // @ts-ignore
        cropperImg.value = e.target.result
      };
      reader.readAsDataURL(rawFile);
      showCropper.value = true
      return false
    }
    return true
  }
  return false
}

/** 确认裁剪 */
const confirmCropper = () => {
  cropper.value?.getCropData()
  cropper.value?.getCropBlob()
  showCropper.value = false
}

/** 确认去水印：框选 → 处理 → 去水印；若同时开启裁剪则衔接到裁剪 */
const confirmWatermark = async () => {
  if (watermarkApplying.value) return
  if (!watermarkComp.value || watermarkComp.value.getRegionCount() === 0) {
    ElMessage.warning(content.selectWatermarkArea[props.language])
    return
  }
  watermarkApplying.value = true
  const result = await watermarkComp.value.getResult()
  watermarkApplying.value = false
  if (!result) return
  showWatermark.value = false
  if (props.isCropper) {
    cropperImg.value = result.dataURL
    showCropper.value = true
    return
  }
  uploadFile(result.blob, result.dataURL)
}

watch(() => cropperImgBlob.value, () => {
  uploadFile(cropperImgBlob.value, cropperImgData.value)
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
  cancel: {
    zhCn: '取消',
    en: `cancel`
  },
  confirm: {
    zhCn: '确认',
    en: `confirm`
  },
  watermark: {
    zhCn: '确认去水印',
    en: `confirm remove watermark`
  },
  selectWatermarkArea: {
    zhCn: '请先框选需要去除的水印区域',
    en: `Please select the watermark area first`
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
      class="ve-upload-picture">
    <img v-if="_file" :src="_file" alt="" class="avatar"/>
    <el-icon v-else class="avatar-uploader-icon">
      <Plus/>
    </el-icon>
  </el-upload>

  <el-dialog v-model="showWatermark" width="800">
    <ve-watermark-remove
        v-if="showWatermark"
        ref="watermarkComp"
        :key="watermarkKey"
        :img="watermarkImg"
        :language="language"/>
    <template #footer>
      <span>
        <el-button :disabled="watermarkApplying" @click="showWatermark = false">{{ content.cancel[language] }}</el-button>
        <el-button type="primary" :loading="watermarkApplying" @click="confirmWatermark">{{ content.watermark[language] }}</el-button>
      </span>
    </template>
  </el-dialog>

  <el-dialog v-model="showCropper" width="750">
    <ve-cropper-shear ref="cropper" :fixed-number="fixedNumber" :fixed-number-list="fixedNumberList" :img="cropperImg"
                      @get-crop-blob="cropperImgBlob = $event" @get-crop-data="cropperImgData = $event"/>
    <template #footer>
      <span>
        <el-button @click="showCropper = false">{{ content.reset[language] }}</el-button>
        <el-button type="primary" @click="confirmCropper">{{ content.confirm[language] }}</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped>
.ve-upload-picture .avatar {
  width: 100%;
  display: block;
  max-width: 200px;
  max-height: 200px;
}
</style>
<style lang="scss">
.ve-upload-picture .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.ve-upload-picture .el-upload:hover {
  border-color: var(--el-color-primary);
}

.ve-upload-picture .el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>
