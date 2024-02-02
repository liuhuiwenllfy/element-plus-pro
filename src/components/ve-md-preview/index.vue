<script lang="ts" setup>

import {MdCatalog, MdPreview} from 'md-editor-v3'
import {store} from '@/vuex/store'
import 'md-editor-v3/lib/preview.css'
import {nextTick, ref} from "vue";

const props = defineProps({
  // 唯一标识
  editorId: {
    type: String,
    required: true,
    default: () => 'md-editor-v3'
  },
  // 主题 'default' | 'github' | 'vuepress' | 'mk-cute' | 'smart-blue' | 'cyanosis'
  previewTheme: {
    type: String,
    required: false,
    default: () => 'cyanosis'
  },
  // 内容
  modelValue: {
    type: String,
    required: false,
    default: () => ''
  },
  height: {
    type: Number,
    required: false,
    default: () => ''
  },
  mdCatalogShow: {
    type: Boolean,
    required: false,
    default: () => true
  }
})

let scrollElement = ref<HTMLElement>()
let offset = ref<number>(100)
nextTick(() => {
  scrollElement.value = document.getElementById(props.editorId)
  offset.value = scrollElement.value.getBoundingClientRect().top + 100
})

</script>

<template>
  <div :id="editorId" :style="{height: height}" class="ve-md-preview">
    <el-row>
      <el-col :span="mdCatalogShow?20:24">
        <MdPreview
            :editorId="editorId"
            :modelValue="modelValue"
            :previewTheme="previewTheme"
            :style="{height: `${height}px`, borderRadius:'4px'}"
            :theme="store.state.dark? 'dark':'light'"
        />
      </el-col>
      <el-col v-if="mdCatalogShow" :span="4">
        <el-affix :offset="offset" target=".ve-md-preview">
          <MdCatalog v-if="scrollElement" :editorId="editorId" :scrollElement="scrollElement"
                     class="ve-md-preview-right"/>
        </el-affix>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="less" scoped>
.ve-md-preview {
  width: 100%;
  overflow: auto;
  position: relative;
  height: 100vh;

  .ve-md-preview-right {
    border-left: 1px solid @base-border;
    font-size: 14px;
    color: @secondary-text;
  }
}
</style>
