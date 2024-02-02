<script lang="ts" setup>
import {FormInstance} from 'element-plus/es'
import {computed, reactive, ref} from 'vue'
import {FormRules} from 'element-plus'
import {useI18n} from 'vue-i18n'
import {RichTextTemplateInfoSaveDto} from '@/entity/dto/system/RichTextTemplateInfoSaveDto'
import {contentRegexp, titleRegexp} from '@/verify'
import VeMdEditor from '@/components/ve-md-editor/index.vue'
import {store} from "@/vuex/store";

const {t} = useI18n()

const props = defineProps({
  dialogVisible: {
    type: Boolean,
    required: true,
    default: () => false
  }
})

const data = reactive<RichTextTemplateInfoSaveDto>({
  content: "",
  title: ""
})

const formRef = ref<FormInstance>()

const rules = computed(() => {
  return reactive<FormRules>({
    title: [{
      required: true,
      validator: titleRegexp,
      trigger: 'blur'
    }],
    content: [{
      required: true,
      validator: contentRegexp,
      trigger: 'blur'
    }]
  })
})

const emits = defineEmits(['closed', 'onSubmit'])

const closed = (formEl: FormInstance | undefined) => {
  formEl.resetFields()
  emits('closed')
}

const veMdEditorRef = ref()

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!veMdEditorRef.value.validate() && !formEl) return
  await formEl.validate((valid) => {
    if (valid) {
      emits('onSubmit', data)
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
  veMdEditorRef.value.validateClear()
}
</script>

<template>
  <el-dialog
      v-model="props.dialogVisible"
      destroy-on-close
      draggable
      fullscreen
      @closed="closed(formRef)">
    <template #header>
      {{ $t('message.add') }}
    </template>
    <el-form
        ref="formRef"
        :model="data"
        :rules="rules"
        label-position="top">
      <el-form-item prop="title">
        <template #label>
          {{ $t('message.title') }}
        </template>
        <el-input
            v-model="data.title"
            :placeholder="$t('message.enterParameter', {parameter: $t('message.title')})"
            clearable/>
      </el-form-item>
      <el-form-item prop="content">
        <template #label>{{ $t('message.content') }}</template>
      </el-form-item>
      <ve-md-editor
          ref="veMdEditorRef"
          :modelValue="data.content"
          :placeholder="$t('message.enterParameter', {parameter: $t('message.content')})"
          @on-change="data.content = $event"/>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="resetForm(formRef)">{{ $t('message.reset') }}</el-button>
        <el-button :loading="store.state.loading" type="primary" @click="submitForm(formRef)">{{
            $t('message.confirm')
          }}</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style lang="less" scoped>
</style>
