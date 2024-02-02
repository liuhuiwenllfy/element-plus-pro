<script lang="ts" setup>
import FastNav from '@/components/ve-management-framework/fast-nav/index.vue'
import {useStore} from '@/vuex/store'

const store = useStore()
</script>

<template>
  <div class="main">
    <FastNav/>
    <div class="pages">
      <div class="scrollbar">
        <router-view v-slot="{ Component }" class="item">
          <transition name="el-fade-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.main {
  height: calc(100% - 16px);
  overflow: hidden;
  padding: 8px;
  background-color: @light-fill;

  .pages {
    height: calc(100% - 41px);
    border: 1px solid @light-border;
    border-top: none;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    background-color: @base-background;

    .item {
      min-height: 700px;
      padding: 10px;
      height: calc(100% - 20px)
    }
  }
}
</style>
