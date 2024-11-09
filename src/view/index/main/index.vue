<script lang="ts" setup>
import VeFastNav from '@/components/ve-fast-nav/index.vue'
import {useCommonStore} from "@/pinia/common.ts";
import {useRoute, useRouter} from "vue-router";
import {ElScrollbar} from "element-plus";
import {ref, watch} from "vue";

const commonStore = useCommonStore()

const router = useRouter()

const handleRouter = (name: string) => {
  router.push({name: `${name}`})
}

const scrollbarRef = ref<InstanceType<typeof ElScrollbar>>()

const route = useRoute()

watch(() => route.name, () => {
  if (scrollbarRef && scrollbarRef.value) {
    scrollbarRef.value.setScrollTop(0)
    scrollbarRef.value.setScrollLeft(0)
  }
})

</script>

<template>
  <div class="main">
    <ve-fast-nav :activeName="<string>router.currentRoute.value.name"
                 :language="commonStore.getLocale"
                 :tab-list="commonStore.tabList"
                 @handle-router="handleRouter"/>
    <el-scrollbar ref="scrollbarRef">
      <div class="pages">
        <transition name="el-fade-in">
          <router-view v-slot="{ Component, route }">
            <component :is="Component" :key="route.path"/>
          </router-view>
        </transition>
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
