<script lang="ts" setup>
import VeFastNav from 've-fast-nav/index.vue'
import {useCommonStore} from "@/pinia/common.ts";
import {useRouter} from "vue-router";

const commonStore = useCommonStore()

const router = useRouter()

const handleRouter = (name) => {
  router.push({name: `${name}`})
}

</script>

<template>
  <div class="main">
    <ve-fast-nav :activeName="router.currentRoute.value.name"
                 :language="commonStore.getLocale"
                 :tab-list="commonStore.tabList"
                 @handle-router="handleRouter"/>
    <el-scrollbar>
      <div class="pages">
        <router-view v-slot="{ Component, route }">
          <transition name="el-fade-in">
            <component :is="Component" :key="route.path"/>
          </transition>
        </router-view>
      </div>
    </el-scrollbar>

  </div>
</template>

<style lang="scss" scoped>
.main {
  height: calc(100% - 57px);
  padding: 8px;

  .pages {
    height: 100%;
    padding: 10px;
    border: 1px solid $light-border;
    margin-top: -1px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
}
</style>
