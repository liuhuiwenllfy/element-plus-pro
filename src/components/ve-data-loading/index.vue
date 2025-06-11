<script lang="ts" setup>
import VeLoadMore from 've-load-more/index.vue'
import {ElEmpty, ElSkeleton} from 'element-plus'
import 'element-plus/es/components/skeleton/style/css'
import 'element-plus/es/components/empty/style/css'
import {PropType, reactive} from "vue";

defineProps({
  size: {
    type: Number,
    default: () => 0
  },
  skeletonShow: {
    type: Boolean,
    default: false
  },
  loadMoreShow: {
    type: Boolean,
    default: false
  },
  hiddenLoad: {
    type: Boolean,
    default: false
  },
  rows: {
    type: Number,
    default: () => 5
  },
  language: {
    type: String as PropType<'zhCn' | 'en' | string>,
    required: false,
    default: () => 'zhCn'
  },
})

const emits = defineEmits(['loadMore'])

const loadMore = () => {
  emits('loadMore')
}

const content = reactive<any>({
  noData: {
    zhCn: '暂无数据',
    en: 'No data',
  }
})
</script>

<template>
  <el-skeleton v-show="skeletonShow" :rows="rows" animated/>
  <el-empty v-show="size === 0 && !skeletonShow" :description="content.noData[language]"/>
  <ve-load-more v-show="size > 0 && !skeletonShow && !hiddenLoad" :language="language"
                :loading="loadMoreShow"
                @handle-click="loadMore">
  </ve-load-more>
</template>

<style lang="scss" scoped>

</style>