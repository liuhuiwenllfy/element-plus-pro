<!--
加载更多
-->
<script lang="ts" setup>
import {RefreshLeft} from "@element-plus/icons-vue";

const prop = defineProps({
  show: {
    type: Boolean,
    required: false,
    default: () => true
  }
})
const emits = defineEmits(['handleClick'])
const loadMore = async () => {
  emits('handleClick')
}
</script>

<template>
  <div class="load-more">
    <el-link v-show="show" :icon="RefreshLeft" :underline="false" type="primary" @click="loadMore">
      {{ $t('message.loadMore') }}
    </el-link>
    <el-text v-show="!show" type="info">{{ $t('message.end') }}</el-text>
  </div>
</template>

<style lang="less" scoped>
.load-more {
  padding: 10px;
  text-align: center;
}
</style>
