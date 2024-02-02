<script lang="ts" setup>
import { MoreFilled, } from '@element-plus/icons-vue'
import { useStore } from '@/vuex/store'

const store = useStore()
const click = () => {
  store.commit('drawer', true);
}
</script>

<template>
  <div class="global-setting" @click="click">
    <el-icon><MoreFilled/></el-icon>
  </div>
</template>

<style lang="less" scoped>
.global-setting{
  .el-icon {
    font-size: 20px;
    padding: 20px 10px 19px;

    &:hover {
      background-color: var(--el-menu-hover-bg-color);
    }
  }
}
</style>
