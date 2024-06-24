<script lang="ts" setup>
import router from '@/router'
import {useCommonStore} from "@/pinia/common.ts";
import VeError500 from "ve-error/500/index.vue";

const back = () => {
  router.go(-1)
}

const commonStore = useCommonStore();
</script>

<template>
  <ve-error500 :language="commonStore.getLocale" @handle-back="back"/>
</template>

<style lang="scss" scoped>
</style>
