<script lang="ts" setup>
import Main from '@/view/index/main/index.vue'
import Header from '@/view/index/header/index.vue'
import Footer from '@/view/index/footer/index.vue'
import Aside from '@/view/index/aside/index.vue'
import Layout5 from 've-layout/layout-5/index.vue'
</script>

<template>
  <Layout5>
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
</template>

<style lang="scss" scoped>

</style>
