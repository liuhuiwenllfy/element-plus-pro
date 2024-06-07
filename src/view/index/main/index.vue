<script lang="ts" setup>
import VeFastNav from 've-fast-nav/index.vue'
import {useCommonStore} from "@/pinia/common.ts";

const commonStore = useCommonStore()

</script>

<template>
  <div class="main">
    <ve-fast-nav :activeName="commonStore.getDefaultActive" :language="commonStore.getLocale"
                 :tab-list="commonStore.tabList"/>
    <div class="pages">
      <div class="scrollbar">
        <router-view v-slot="{ Component, route }">
          <transition name="fade">
            <component :is="Component" :key="route.path"/>
          </transition>
        </router-view>
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
.main {
  height: calc(100% - 16px);
  overflow: hidden;
  padding: 8px;

  .pages {
    height: calc(100% - 61px);
    padding: 10px;
    border: 1px solid $light-border;
    border-top: none;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    background-color: $base-background;

    .item {
      padding: 10px;
      height: calc(100% - 20px)
    }
  }
}
</style>
