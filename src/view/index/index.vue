<script lang="ts" setup>
import Main from '@/view/index/main/index.vue'
import Header from '@/view/index/header/index.vue'
import Footer from '@/view/index/footer/index.vue'
import Aside from '@/view/index/aside/index.vue'
import Layout1 from 've-layout/layout-1/index.vue'
import Layout2 from 've-layout/layout-2/index.vue'
import Layout3 from 've-layout/layout-3/index.vue'
import Layout4 from 've-layout/layout-4/index.vue'
import Layout5 from 've-layout/layout-5/index.vue'
import Layout6 from 've-layout/layout-6/index.vue'
import Layout7 from 've-layout/layout-7/index.vue'
import {useCommonStore} from "@/pinia/common.ts";

const commonStore = useCommonStore()

</script>

<template>
  <Layout1 v-if="commonStore.layout === 1">
    <template #headerArea>
      <Header/>
    </template>
    <template #mainArea>
      <Main/>
    </template>
  </Layout1>
  <Layout2 v-if="commonStore.layout === 2">
    <template #headerArea>
      <Header/>
    </template>
    <template #mainArea>
      <Main/>
    </template>
    <template #footerArea>
      <Footer/>
    </template>
  </Layout2>
  <Layout3 v-if="commonStore.layout === 3">
    <template #asideArea>
      <Aside/>
    </template>
    <template #mainArea>
      <Main/>
    </template>
  </Layout3>
  <Layout4 v-if="commonStore.layout === 4">
    <template #asideArea>
      <Aside/>
    </template>
    <template #headerArea>
      <Header/>
    </template>
    <template #mainArea>
      <Main/>
    </template>
  </Layout4>
  <Layout5 v-if="commonStore.layout === 5">
    <template #asideArea>
      <Aside/>
    </template>
    <template #headerArea>
      <Header/>
    </template>
    <template #mainArea>
      <Main/>
    </template>
    <template #footerArea>
      <Footer/>
    </template>
  </Layout5>
  <Layout6 v-if="commonStore.layout === 6">
    <template #asideArea>
      <Aside/>
    </template>
    <template #headerArea>
      <Header/>
    </template>
    <template #mainArea>
      <Main/>
    </template>
  </Layout6>
  <Layout7 v-if="commonStore.layout === 7">
    <template #asideArea>
      <Aside/>
    </template>
    <template #headerArea>
      <Header/>
    </template>
    <template #mainArea>
      <Main/>
    </template>
    <template #footerArea>
      <Footer/>
    </template>
  </Layout7>
</template>

<style lang="scss" scoped>

</style>
