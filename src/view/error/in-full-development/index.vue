<script lang="ts" setup>
import router from '@/router'
import {useCommonStore} from "@/pinia/common.ts";
import InFullDevelopment from "ve-error/in-full-development/index.vue";

const back = () => {
  router.go(-1)
}

const commonStore = useCommonStore();
</script>

<template>
  <in-full-development :language="commonStore.getLocale" @handle-back="back"/>
</template>

<style lang="scss" scoped>
</style>
