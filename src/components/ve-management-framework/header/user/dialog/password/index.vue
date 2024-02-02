<script lang="ts" setup>
import {ElMessage, FormInstance, FormRules} from 'element-plus'
import {computed, reactive, ref} from 'vue'
import {useI18n} from 'vue-i18n'
import {ChangePasswordDto} from '@/entity/dto/system/ChangePasswordDto'
import {confirmPwdRegexp, newPwdRegexp, oldPwdRegexp} from '@/verify'
import {resData} from '@/entity/res'
import {getSession} from '@/assets/js/sessionStorageUtils'
import {changePassword} from '@/api/result/user'
import {store} from "@/vuex/store";

const props = defineProps({
  dialogVisible: {
    type: Boolean,
    required: true,
    default: () => false
  }
})

const {t} = useI18n()

const formRef = ref<FormInstance>()

const data = reactive<ChangePasswordDto>({
  confirmPwd: '',
  id: getSession('user_info').id,
  newPwd: '',
  oldPwd: ''
})
const rules = computed(() => {
  return reactive<FormRules>({
    oldPwd: [{
      required: true,
      validator: oldPwdRegexp,
      trigger: 'blur'
    }],
    newPwd: [{
      required: true,
      validator: newPwdRegexp,
      trigger: 'blur'
    }],
    confirmPwd: [{
      required: true,
      validator: confirmPwdRegexp,
      trigger: 'blur'
    }],
  })
})

const emits = defineEmits(['closed'])

const closed = (formEl: FormInstance | undefined) => {
  formEl.resetFields()
  emits('closed')
}

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate(async (valid) => {
    if (valid) {
      if (data.newPwd !== data.confirmPwd) {
        ElMessage.warning(t('message.newPwdNotEqualToConfirmPwd'))
        return
      }
      const res = <resData>await changePassword(data)
      if (res.ok) {
        emits('closed')
      }
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>

<template>
  <el-dialog
      v-model="props.dialogVisible"
      draggable
      width="500px"
      @closed="closed(formRef)">
    <template #header>
      {{ $t('message.modifyThePassword') }}
    </template>
    <el-form
        ref="formRef"
        :model="data"
        :rules="rules"
        label-position="top">
      <!--租户名称-->
      <el-form-item :label="$t('message.oldPwd')" prop="oldPwd">
        <el-input v-model="data.oldPwd" :placeholder="$t('message.enterParameter', {parameter: $t('message.oldPwd')})"
                  clearable
                  type="password"/>
      </el-form-item>
      <el-form-item :label="$t('message.newPwd')" prop="newPwd">
        <el-input v-model="data.newPwd"
                  :placeholder="$t('message.enterParameter', {parameter: $t('message.newPwd')})"
                  clearable
                  type="password"/>
      </el-form-item>
      <el-form-item :label="$t('message.confirmPwd')" prop="confirmPwd">
        <el-input v-model="data.confirmPwd"
                  :placeholder="$t('message.enterParameter', {parameter: $t('message.confirmPwd')})"
                  clearable
                  type="password"/>
      </el-form-item>
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
