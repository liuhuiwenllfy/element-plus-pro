<!--
上传头像
上传支持两种类型，配合环境变量使用
type=local，上传采用本地文件管理
type=gridFs，上传采用mongodb文件管理
-->
<script lang="ts" setup>
import {onMounted, ref, watch} from 'vue'
import type {UploadProps} from 'element-plus'
import {ElMessage} from 'element-plus'
import {Plus} from '@element-plus/icons-vue'
import {useI18n} from 'vue-i18n'
import {getDefaultSession} from "@/assets/js/sessionStorageUtils";
import {spliceMongodbUrl} from "@/assets/js/common";

// type：上传类型，默认支持传入‘local’，‘gridFs’
// file：上传类型为‘local’，则为文件地址；上传类型为‘gridFs’，则为文件id
const prop = defineProps({
  file: {
    type: String,
    required: false,
    default: () => ''
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

const imageUrl = ref('')

// 监听 file变化，同步预览图变化
watch(() => prop.file, async () => {
  if (prop.file) {
    if (prop.type === 'local') {
      imageUrl.value = prop.file
    }
    if (prop.type === 'gridFs') {
      imageUrl.value = spliceMongodbUrl(prop.file)
    }
  } else {
    imageUrl.value = ''
  }
})

// 回调函数声明
const emits = defineEmits(['handleSuccess'])

// 上传成功回调
const handleSuccess: UploadProps['onSuccess'] = (response) => {
  // response.msg：上传类型为‘local’，则为文件地址；上传类型为‘gridFs’，则为文件id
  emits('handleSuccess', response.data)
}

const {t} = useI18n()

// 上传之前校验文件
// 文件大小不能超过2MB
const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
  if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error(t('message.imageMax2MB'))
    return false
  }
  return true
}

</script>

<template>
  <el-upload
      :action="api"
      :before-upload="beforeAvatarUpload"
      :headers="{
        token: getDefaultSession('token')
      }"
      :on-success="handleSuccess"
      :show-file-list="false"
      accept="image/*"
      class="ve-upload-avatar">
    <el-avatar v-if="imageUrl" :src="imageUrl" class="avatar" size="large"/>
    <el-icon v-else class="avatar-uploader-icon">
      <Plus/>
    </el-icon>
  </el-upload>
</template>

<style lang="less" scoped>

</style>
<style lang="less">
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
