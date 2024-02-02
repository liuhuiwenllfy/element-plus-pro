<script lang="ts" setup>

import {store} from '@/vuex/store'
import type {ExposeParam} from 'md-editor-v3'
import {MdEditor} from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'
import {nextTick, onMounted, ref, watch} from 'vue'
import axios from 'axios'
import {hasSession} from '@/assets/js/sessionStorageUtils'
import richTextTemplate from '@/components/ve-md-editor/richTextTemplate/index.vue'

const props = defineProps({
  // 内容
  modelValue: {
    type: String,
    required: false,
    default: () => ''
  },
  // 唯一标识
  editorId: {
    type: String,
    required: false,
    default: () => 'md-editor-v3'
  },
  // 代码区域是否展示行号
  showCodeRowNumber: {
    type: Boolean,
    required: false,
    default: () => false
  },
  // 主题 'default' | 'github' | 'vuepress' | 'mk-cute' | 'smart-blue' | 'cyanosis'
  previewTheme: {
    type: String,
    required: false,
    default: () => 'cyanosis'
  },
  // 是否用图表展示内容
  noMermaid: {
    type: Boolean,
    required: false,
    default: () => false
  },
  // 代码样式 'atom'|'a11y'|'github'|'gradient'|'kimbie'|'paraiso'|'qtcreator'|'stackoverflow'
  codeTheme: {
    type: String,
    required: false,
    default: () => 'atom'
  },
  // 占位信息
  placeholder: {
    type: String,
    required: false,
    default: () => ''
  },
  // 页脚
  footers: {
    type: Array,
    required: false,
    default: () => []
  },
  // 是否显示上传图片
  noUploadImg: {
    type: Boolean,
    required: false,
    default: () => false
  },
  // 是否显示上传图片
  maxLength: {
    type: Number,
    required: false,
    default: () => 65535
  },
  // 是否显示按钮文字
  showToolbarName: {
    type: Boolean,
    required: false,
    default: () => false
  },
  // 是否显示添加模板按钮
  showAddTemplate: {
    type: Boolean,
    required: false,
    default: () => true
  },
})
const text = ref('')

watch(() => props.modelValue, ()=>{
  nextTick(()=>{
    text.value = props.modelValue
  })
})

const toolbars = [
  'bold',
  'underline',
  'italic',
  '-',
  'title',
  'strikeThrough',
  'sub',
  'sup',
  'quote',
  'unorderedList',
  'orderedList',
  'task',
  '-',
  'codeRow',
  'code',
  'link',
  'image',
  'table',
  'mermaid',
  '-',
  'revoke',
  'next',
  0,
  '=',
  'pageFullscreen',
  'fullscreen',
  'preview',
  'catalog',
]

const emits = defineEmits(['onChange', 'richTextTemplateSubmit'])

const onChange = () => {
  emits('onChange', text.value)
}

const onUploadImg = async (files, callback) => {
  const res = await Promise.all(
      files.map((file) => {
        return new Promise((rev, rej) => {
          const form = new FormData()
          form.append('file', file)
          //@ts-ignore
          axios.post(import.meta.env.VITE_UPLOAD_GRIDFS_URL, form, {
            headers: {
              'Content-Type': 'multipart/form-data',
              token: hasSession('token') ? localStorage.getItem('token') : ''
            }
          }).then((res) => rev(res)).catch((error) => rej(error))
        })
      })
  )

  callback(res.map((item) => {
    let link = item.data.data
    if (link && link.indexOf('http') === -1) {
      //@ts-ignore
      link = import.meta.env.VITE_GRIDFSFILE_URL + item.data.data
    }
    return link
  }))
}

const addTemplate = () => {
  richTextTemplateDialogVisible.value = true
}

const validateFlag = ref(true)

//验证是否有内容
const validate = () => {
  const flag = text.value !== ''
  setTimeout(() => {
    validateFlag.value = flag
  }, 50)
  return flag
}

//清空内容
const validateClear = () => {
  setTimeout(() => {
    validateFlag.value = true
    text.value = ''
  }, 50)

}

defineExpose({
  validate,
  validateClear,
})
const showAddTemplate = ref(props.showAddTemplate)
const editorRef = ref<ExposeParam>()
onMounted(() => {
  editorRef.value?.on('pageFullscreen', (status) => {
    if (status){
      showAddTemplate.value = false
    }else {
      showAddTemplate.value = props.showAddTemplate
    }
  });
  editorRef.value?.on('fullscreen', (status) => {
    if (status){
      showAddTemplate.value = false
    }else {
      showAddTemplate.value = props.showAddTemplate
    }
  });
})

const richTextTemplateDialogVisible = ref(false)
const coordinate = ref()

const selectTemplate = (currentCoordinate: string) => {
  richTextTemplateDialogVisible.value = true
  coordinate.value = currentCoordinate
}

const richTextTemplateSubmit = (content: string) => {
  text.value= content
  richTextTemplateDialogVisible.value = false
}
</script>

<template>
  <div class="ve-md-editor">
    <MdEditor
        ref="editorRef"
        v-model="text"
        :codeTheme="codeTheme"
        :editorId="editorId"
        :footers="[]"
        :language="store.state.internationalization === 'zhCn'? 'zh-CN':'en-US'"
        :noMermaid="noMermaid"
        :noUploadImg="noUploadImg"
        :placeholder="placeholder"
        :previewTheme="previewTheme"
        :scroll-auto="true"
        :showCodeRowNumber="showCodeRowNumber"
        :showToolbarName="showToolbarName"
        :style="{height: '540px', borderColor: !validateFlag?'#F56C6C':'', borderRadius: '4px'}"
        :theme="store.state.dark? 'dark':'light'"
        :toolbars="toolbars"
        @onChange="onChange"
        @onUploadImg="onUploadImg">
      <template #defToolbars>
        <el-button v-if="showAddTemplate" round size="small" type="primary" @click="addTemplate">
          {{ $t('message.selectTemplate') }}
        </el-button>
      </template>
    </MdEditor>
  </div>
  <richTextTemplate
      :dialogVisible="richTextTemplateDialogVisible"
      @closed="richTextTemplateDialogVisible = false"
      @onSubmit="richTextTemplateSubmit"/>
</template>

<style lang="less" scoped>
.ve-md-editor {
  width: 100%;
  .el-button {
    margin-left: 5px;
  }
}
</style>
