<script lang="ts" setup>
import Layout from '@/view/index/layout/index.vue'
import {Setting} from '@element-plus/icons-vue'
import Night from '@/components/ve-management-framework/header/night/index.vue'
import {useStore} from '@/vuex/store'
import {reactive} from 'vue'
import {useI18n} from 'vue-i18n'

const store = useStore()

const data = reactive({
  fastNav: true
})

const handleGlobalSizeChange = (val: String) => {
  store.commit('globalSize', val)
}

const {locale} = useI18n()
const handleInternationalizationChange = (val: string) => {
  store.commit('internationalization', val)
  locale.value = val
}

const handleClose = () => {
  store.commit('drawer', false)
}

</script>

<template>
  <div class="drawer-setting">
    <el-drawer
        v-model="store.state.drawer"
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
          <Layout/>
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <h2>{{ $t('message.darkMode') }}</h2>
          </template>
          <div class="item">
            <span>{{ $t('message.whetherToTurnOnNightMode') }}</span>
            <Night/>
          </div>
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <h2>{{ $t('message.globalSize') }}</h2>
          </template>
          <div>
            <div>{{ $t('message.selectGlobalSize') }}</div>
            <el-radio-group v-model="store.state.globalSize" @change="handleGlobalSizeChange">
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
            <el-radio-group v-model="store.state.internationalization" @change="handleInternationalizationChange">
              <el-radio label="zhCn">{{ $t('message.chinese') }}</el-radio>
              <el-radio label="en">{{ $t('message.english') }}</el-radio>
            </el-radio-group>
          </div>
        </el-descriptions-item>
      </el-descriptions>
    </el-drawer>
  </div>
</template>

<style lang="less" scoped>
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
