<script lang="ts" setup>
import VeFastNav from '@/components/ve-fast-nav/index.vue'
import {useCommonStore} from "@/pinia/common.ts";
import {useRoute, useRouter} from "vue-router";
import {ElScrollbar} from "element-plus";
import {ref, watch} from "vue";
import {InfoFilled} from "@element-plus/icons-vue";
import {VeWeixin} from "ve-icon/other/components.ts";
import VeBackTop from "@/components/ve-back-top/index.vue";

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
const _isShowBack = ref(false)

const scroll = (scroll: any) => {
  _isShowBack.value = scroll.scrollTop > 80
}

const backTop = () => {
  if (scrollbarRef && scrollbarRef.value) {
    scrollbarRef.value.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
</script>

<template>
  <div class="main">
    <ve-fast-nav :activeName="<string>router.currentRoute.value.name"
                 :language="commonStore.getLocale"
                 :tab-list="commonStore.tabList"
                 @handle-router="handleRouter"/>
    <el-scrollbar ref="scrollbarRef" @scroll="scroll">
      <div class="pages">
        <transition name="el-fade-in">
          <router-view v-slot="{ Component, route }">
            <component :is="Component" :key="route.path"/>
          </router-view>
        </transition>
      </div>
    </el-scrollbar>
    <ve-back-top :is-show-back="_isShowBack" class="back-top" @back-top="backTop">
      <template #default>
        <el-popover
            :width="200"
            placement="left"
            trigger="hover">
          <el-image
              :preview-src-list="['https://resource.liulingfengyu.cn/img/公众号二维码.jpg']"
              src="https://resource.liulingfengyu.cn/img/公众号二维码.jpg"
          />
          <div style="text-align: center">关注公众号</div>
          <template #reference>
            <el-button>
              <el-icon>
                <VeWeixin/>
              </el-icon>
            </el-button>
          </template>
        </el-popover>
        <div class="line"></div>
        <el-tooltip
            class="box-item"
            effect="dark"
            placement="left">
          <template #content>
            反馈
          </template>
          <el-button :icon="InfoFilled"></el-button>
        </el-tooltip>
        <div v-show="_isShowBack" class="line"></div>
      </template>
    </ve-back-top>
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

  .back-top {

    .el-button {
      height: 50px;
      width: 50px;
      border: none;
      background-color: var(--el-bg-color);
      color: var(--el-text-color-placeholder);
      font-size: 20px;

      &:hover {
        color: var(--el-color-primary);
        background-color: transparent;
      }
    }

    .line {
      width: 50px;
      border-top: 1px solid;
      border-color: var(--el-border-color-lighter);
    }
  }
}
</style>
