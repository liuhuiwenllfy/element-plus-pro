<script lang="ts" setup>
import VeError401 from 've-error/401/index.vue'
import router from '@/router'
import {useCommonStore} from "@/pinia/common.ts";

const back = () => {
  router.go(-1)
}

const commonStore = useCommonStore();
</script>

<template>
  <ve-error401 :language="commonStore.getLocale" @handle-back="back"/>
</template>

<style lang="scss" scoped>
</style>
