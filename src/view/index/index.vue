<script lang="ts" setup>
import Layout1 from '@/view/index/layout/layout-1/index.vue'
import Layout2 from '@/view/index/layout/layout-2/index.vue'
import Layout3 from '@/view/index/layout/layout-3/index.vue'
import Layout4 from '@/view/index/layout/layout-4/index.vue'
import Layout5 from '@/view/index/layout/layout-5/index.vue'
import Layout6 from '@/view/index/layout/layout-6/index.vue'
import Layout7 from '@/view/index/layout/layout-7/index.vue'

import DrawerSetting from '@/components/ve-management-framework/header/global-setting/drawer-setting/index.vue'
import ShortcutButton from '@/view/index/shortcut-button/index.vue'


import {useStore} from '@/vuex/store'
import {useI18n} from 'vue-i18n'

const store = useStore()

const {t} = useI18n()
</script>

<template>
  <div class="index">
    <Layout1 v-if="store.state.layout === 1"/>
    <Layout2 v-if="store.state.layout === 2"/>
    <Layout3 v-if="store.state.layout === 3"/>
    <Layout4 v-if="store.state.layout === 4"/>
    <Layout5 v-if="store.state.layout === 5"/>
    <Layout6 v-if="store.state.layout === 6"/>
    <Layout7 v-if="store.state.layout === 7"/>
    <DrawerSetting/>
    <div v-if="store.state.layout === 3" class="shortcut-button">
      <el-divider/>
      <ShortcutButton/>
    </div>
  </div>
</template>

<style lang="less" scoped>
.index {
  height: 100%;
  min-width: 1100px;

  .shortcut-button {
    z-index: 99;
    position: absolute;
    left: 20px;
    bottom: 15px;

    .el-divider {
      width: 220px;
      margin: 10px 0;
    }
  }
}
</style>
