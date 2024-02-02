<script lang="ts" setup>
import AntDesignMenuFoldOutlined from '~icons/ant-design/menu-fold-outlined'
import AntDesignMenuUnfoldOutlined from '~icons/ant-design/menu-unfold-outlined'
import { useStore } from '@/vuex/store'

const store = useStore()

</script>

<template>
  <el-icon>
    <AntDesignMenuFoldOutlined v-show="!store.state.sidebar"/>
    <AntDesignMenuUnfoldOutlined v-show="store.state.sidebar"/>
  </el-icon>
</template>

<style lang="less" scoped>
.el-icon {
  font-size: 20px;
  padding: 20px 10px 19px;

  &:hover {
    background-color: var(--el-menu-hover-bg-color);
  }
}
</style>
