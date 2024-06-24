<script lang="ts" setup>
import router from '@/router'
import {useCommonStore} from "@/pinia/common.ts";
import VeError404 from "ve-error/404/index.vue";

const back = () => {
  router.go(-1)
}

const commonStore = useCommonStore();
</script>

<template>
  <ve-error404 :language="commonStore.getLocale" @handle-back="back"/>
</template>

<style lang="scss" scoped>
</style>
