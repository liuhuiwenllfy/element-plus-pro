<script lang="ts" setup>
import OrgAndPostTable from '@/view/system/user/dialog/orgAndPostTable/index.vue'
import {getSession} from '@/assets/js/sessionStorageUtils'
import {FormInstance, FormRules} from 'element-plus'
import {useI18n} from 'vue-i18n'
import {computed, reactive, ref, watch} from 'vue'
import {resData} from '@/entity/res'
import {queryUserById, updateUserInfo} from '@/api/result/user'
import {UserInfoVo} from '@/entity/vo/system/UserInfoVo'
import {emailRegexp, mobileRegexp, nicknameRegexp, usernameRegexp} from '@/verify'
import {spliceMongodbUrl} from "@/assets/js/common";

const props = defineProps({
  dialogVisible: {
    type: Boolean,
    required: true,
    default: () => false
  }
})

watch(() => props.dialogVisible, () => {
  if (props.dialogVisible) {
    userById()
  }
})

const {t} = useI18n()

const isEdit = ref(false)

const editLoading = ref(false)

const formRef = ref<FormInstance>()

let data = reactive<UserInfoVo>({
  stream: '',
  avatar: '',
  email: '',
  id: '',
  isDisable: false,
  mobile: '',
  nickname: '',
  orgAndPostList: [],
  roleIds: '',
  roleNames: '',
  tenantId: '',
  tenantName: '',
  username: '',
  version: 0
})

const rules = computed(() => {
  return reactive<FormRules>({
    username: [{required: true, validator: usernameRegexp, trigger: 'blur'}],
    email: [{required: false, validator: emailRegexp, trigger: 'blur'}],
    mobile: [{required: false, validator: mobileRegexp, trigger: 'blur'}],
    nickname: [{required: true, validator: nicknameRegexp, trigger: 'blur'}],
  })
})

const emits = defineEmits(['closed'])

const closed = () => {
  emits('closed')
}

const userById = async () => {
  const res = <resData>await queryUserById({id: getSession('user_info').id})
  if (res.ok) {
    data = Object.assign(data, res.data)
  }
}

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate(async (valid) => {
    if (valid) {
      editLoading.value = true
      const res = <resData>await updateUserInfo(data)
      editLoading.value = false
      if (res.ok) {
        isEdit.value = false
        await userById()
      }
    }
  })
}
</script>

<template>
  <el-dialog
      v-model="props.dialogVisible"
      draggable
      top="10vh"
      width="800px"
      @closed="closed(formRef)">
    <template #header>
      {{ $t('message.personalCenter') }}
    </template>
    <el-space>
      <ve-upload-avatar v-show="isEdit" :file="data.avatar" :round="true" type="gridFs"
                        @handleSuccess="data.avatar = $event"/>
      <el-avatar v-show="!isEdit" :src="spliceMongodbUrl(data.avatar)" size="large"/>
      <el-button v-if="isEdit" :loading="editLoading" type="primary" @click="submitForm(formRef)">{{
          $t('message.save')
        }}
      </el-button>
      <el-button v-if="isEdit" type="primary" @click="isEdit = false">{{ $t('message.cancel') }}</el-button>
      <el-button v-else type="primary" @click="isEdit = true">{{ $t('message.complete') }}</el-button>
    </el-space>
    <el-form
        ref="formRef"
        :model="data"
        :rules="rules"
        label-position="top">
      <el-row :gutter="20">
        <el-divider content-position="left">
          <el-text type="info">{{ $t('message.userInformation') }}</el-text>
        </el-divider>
        <el-col :span="8">
          <el-form-item prop="username">
            <template #label>
              {{ $t('message.username') }}
            </template>
            <el-input v-if="isEdit" v-model="data.username"
                      :placeholder="$t('message.enterParameter', {parameter: $t('message.username')})"
                      clearable/>
            <el-text v-else type="info">
              {{ data.username }}
            </el-text>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item prop="nickname">
            <template #label>
              {{ $t('message.nickname') }}
            </template>
            <el-input v-if="isEdit" v-model="data.nickname"
                      :placeholder="$t('message.enterParameter', {parameter: $t('message.nickname')})"
                      clearable/>
            <el-text v-else type="info">
              {{ data.nickname }}
            </el-text>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item prop="email">
            <template #label>
              {{ $t('message.email') }}
            </template>
            <el-input v-if="isEdit" v-model="data.email"
                      :placeholder="$t('message.enterParameter', {parameter: $t('message.email')})"
                      clearable/>
            <el-text v-else type="info">
              {{ data.email }}
            </el-text>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item prop="primaryMobile">
            <template #label>
              {{ $t('message.mobile') }}
            </template>
            <el-input v-if="isEdit" v-model="data.mobile"
                      :placeholder="$t('message.enterParameter', {parameter: $t('message.mobile')})"
                      clearable/>
            <el-text v-else type="info">
              {{ data.mobile }}
            </el-text>
          </el-form-item>
        </el-col>
        <el-divider content-position="left">
          <el-text type="info">{{ $t('message.otherUserInformation') }}</el-text>
        </el-divider>
        <el-col :span="8">
          <el-form-item>
            <template #label>
              {{ $t('message.tenant') }}
            </template>
            <el-text type="info">{{ data.tenantName }}</el-text>
          </el-form-item>
        </el-col>
        <el-col v-if="data.roleNames" :span="8">
          <el-form-item>
            <template #label>
              {{ $t('message.role') }}
            </template>
            <el-text type="info">{{ data.roleNames }}</el-text>
          </el-form-item>
        </el-col>
        <el-col v-if="data.orgAndPostList.length > 0" :span="24">
          <el-form-item prop="orgAndPostList">
            <template #label>
              {{ $t('message.orgAndPost') }}
            </template>
            <OrgAndPostTable :not-edit="true" :table-data="data.orgAndPostList"
                             @onSubmit="data.orgAndPostList = $event"/>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </el-dialog>
</template>

<style lang="less" scoped>

</style>
