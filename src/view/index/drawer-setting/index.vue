<script lang="ts" setup>
import Layout from '@/components/ve-layout/mini/index.vue'
import {Setting} from '@element-plus/icons-vue'
import {useI18n} from 'vue-i18n'
import {useCommonStore} from "@/pinia/common.ts";
import {ref, watch} from "vue";
import {VeMdCloudyNight, VeSunny} from '@/components/ve-icon/other/components.ts'

const commonStore = useCommonStore();

const _drawer = ref(commonStore.getDrawer)

watch(() => commonStore.getDrawer, () => {
  _drawer.value = commonStore.getDrawer
})

const _globalSizeChange = ref(commonStore.getGlobalSize)

const handleGlobalSizeChange = (val: string) => {
  commonStore.changeGlobalSize(val)
}

const {locale} = useI18n()

const _locale = ref(commonStore.getLocale)

const handleInternationalizationChange = (val: string) => {
  commonStore.changeLocale(val)
  locale.value = val
}

const handleClose = () => {
  commonStore.changeDrawer(false)
}

const _dark = ref<boolean>(commonStore.getDark)

const handleNightChange = (command: any) => {
  commonStore.changeDark(command)
}

</script>

<template>
  <div class="drawer-setting">
    <el-drawer
        v-model="_drawer"
        :size="390"
        direction="rtl"
        @close="handleClose">
      <template #header>
        <div class="header">
          <el-icon>
            <Setting/>
          </el-icon>
          <span>{{ $t('message.setting') }}</span>
        </div>
      </template>
      <el-descriptions :column="1" direction="vertical">
        <el-descriptions-item>
          <template #label>
            <h2>{{ $t('message.layout') }}</h2>
          </template>
          <Layout :layout="commonStore.getLayout" @handle-select="commonStore.changeLayout($event)"/>
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <h2>{{ $t('message.darkMode') }}</h2>
          </template>
          <div class="item">
            <span>{{ $t('message.whetherToTurnOnNightMode') }}</span>
            <el-switch
                v-model="_dark"
                :active-icon="VeMdCloudyNight"
                :inactive-icon="VeSunny"
                inline-prompt
                size="default"
                @change="handleNightChange"
            />
          </div>
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <h2>{{ $t('message.globalSize') }}</h2>
          </template>
          <div>
            <div>{{ $t('message.selectGlobalSize') }}</div>
            <el-radio-group v-model="_globalSizeChange" @change="handleGlobalSizeChange">
              <el-radio label="large">{{ $t('message.large') }}</el-radio>
              <el-radio label="default">{{ $t('message.default') }}</el-radio>
              <el-radio label="small">{{ $t('message.small') }}</el-radio>
            </el-radio-group>
          </div>
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <h2>{{ $t('message.globalization') }}</h2>
          </template>
          <div>
            <div>{{ $t('message.chooseLanguage') }}</div>
            <el-radio-group v-model="_locale" @change="handleInternationalizationChange">
              <el-radio label="zhCn">{{ $t('message.chinese') }}</el-radio>
              <el-radio label="en">{{ $t('message.english') }}</el-radio>
            </el-radio-group>
          </div>
        </el-descriptions-item>
      </el-descriptions>
    </el-drawer>
  </div>
</template>

<style lang="scss" scoped>
.drawer-setting {
  .header {
    display: flex;
    align-items: center;
    font-size: 22px;

    .el-icon {
      margin-right: 5px
    }
  }

  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 330px;
  }
}
</style>
