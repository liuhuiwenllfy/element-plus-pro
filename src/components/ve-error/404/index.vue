<script lang="ts" setup>
import {ElButton, ElResult} from 'element-plus'
import 'element-plus/es/components/result/style/css'
import 'element-plus/es/components/button/style/css'
import {PropType, reactive} from "vue";

defineProps({
  language: {
    type: String as PropType<'zhCn' | 'en' | string>,
    required: false,
    default: () => 'zhCn'
  },
})

const emits = defineEmits(['handleBack'])

const handleBack = () => {
  emits('handleBack')
}

const content = reactive<any>({
  title: {
    zhCn: '资源不存在，请联系管理员',
    en: 'The resource does not exist, please contact the administrator'
  },
  back: {
    zhCn: '返回',
    en: 'Back'
  },
})
</script>

<template>
  <div class="not-found">
    <el-result
        :sub-title="content.title[language]"
        icon="warning"
        title="404">
      <template #extra>
        <el-button type="primary" @click="handleBack">
          {{ content.back[language] }}
        </el-button>
      </template>
    </el-result>
  </div>
</template>

<style lang="scss" scoped>
.not-found {
  .el-result {
    height: 100%;
  }
}
</style>
