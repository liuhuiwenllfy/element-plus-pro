<script lang="ts" setup>
import {RefreshLeft} from '@element-plus/icons-vue'
import {ElLink, ElText} from 'element-plus'
import {PropType, reactive} from 'vue'
import 'element-plus/es/components/link/style/css'
import 'element-plus/es/components/text/style/css'

const props = defineProps({
  loading: {
    type: Boolean,
    required: false,
    default: () => true
  },
  language: {
    type: String as PropType<'zhCn' | 'en'>,
    required: false,
    default: () => 'zhCn'
  }
})

const emits = defineEmits(['handleClick'])
const loadMore = () => {
  emits('handleClick')
}

const content = reactive({
  loadMore: {
    zhCn: '加载更多',
    en: 'Load more',
  },
  end: {
    zhCn: '到底了',
    en: 'In the end',
  }
})
</script>

<template>
  <div class="load-more">
    <el-link v-show="loading" :icon="RefreshLeft" :underline="false" type="primary" @click="loadMore">
      {{ content.loadMore[language] }}
    </el-link>
    <el-text v-show="!loading" type="info">{{ content.end[language] }}</el-text>
  </div>
</template>

<style lang="scss" scoped>
.load-more {
  padding: 10px;
  text-align: center;
}
</style>
