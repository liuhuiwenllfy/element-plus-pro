<script lang="ts" setup>
import {useRouter} from 'vue-router'
import {useStore} from '@/vuex/store'

const router = useRouter();
const store = useStore();

</script>

<template>
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item to="/">{{ $t('message.home') }}</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: router.currentRoute.value.path }">
        {{
          store.state.internationalization === 'zhCn' ?
              router.currentRoute.value.meta.name : router.currentRoute.value.meta.nameEn
        }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<style lang="less" scoped>
.breadcrumb {
  padding: 23px;
  display: inline-flex;
}
</style>
