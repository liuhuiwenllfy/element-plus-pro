<script lang="ts" setup>
import {useStore} from '@/vuex/store'

import FullScreen from '@/components/ve-management-framework/header/fullScreen/index.vue'
import Logo from '@/components/ve-management-framework/header/logo/index.vue'
import Collapse from '@/components/ve-management-framework/header/collapse/index.vue'
import News from '@/components/ve-management-framework/header/news/index.vue'
import Tenant from '@/components/ve-management-framework/header/tenant/index.vue'
import GlobalSize from '@/components/ve-management-framework/header/global-size/index.vue'
import Internationalization from '@/components/ve-management-framework/header/internationalization/index.vue'
import User from '@/components/ve-management-framework/header/user/index.vue'
import Menu from '@/components/ve-management-framework/header/menu/index.vue'
import Breadcrumb from '@/components/ve-management-framework/header/breadcrumb/index.vue'
import GlobalSetting from '@/components/ve-management-framework/header/global-setting/index.vue'
import Night from '@/components/ve-management-framework/header/night/index.vue'

const store = useStore()
</script>

<template>
  <div class="header noSelect">
    <ul class="is-custom">
      <li v-show="[1,2,4,5].includes(store.state.layout)" class="is-logo">
        <Logo/>
      </li>
      <li v-show="[4,5,6,7].includes(store.state.layout)" @click="store.dispatch('sidebar')">
        <Collapse/>
      </li>
    </ul>
    <Breadcrumb v-show="[4,5,6,7].includes(store.state.layout)"/>
    <Menu v-show="[1,2].includes(store.state.layout)"/>
    <ul class="is-custom" style="float: right">
      <li class="not-btn">
        <Tenant/>
      </li>
      <li>
        <News/>
      </li>
      <li>
        <FullScreen/>
      </li>
      <li>
        <GlobalSize class="global-size"/>
      </li>
      <li>
        <Internationalization/>
      </li>
      <li>
        <Night style="padding: 14px 10px 13px"/>
      </li>
      <li>
        <User/>
      </li>
      <li>
        <GlobalSetting/>
      </li>
    </ul>
  </div>
</template>

<style lang="less" scoped>
.header {
  height: 59px;
  border-bottom: @solid;

  .is-custom {
    //display: inline-block;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      float: left;

      .global-size {
        .el-icon {
          font-size: 20px;
          padding: 20px 10px 19px;

          &:hover {
            background-color: var(--el-menu-hover-bg-color);
          }
        }

        .el-dropdown {
          color: var(--color);
        }
      }
    }
  }
}
</style>
