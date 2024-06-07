<script lang="ts" setup>
import Main from '@/view/index/main/index.vue'
import Header from '@/view/index/header/index.vue'
import Footer from '@/view/index/footer/index.vue'
import Aside from '@/view/index/aside/index.vue'
import Layout7 from 've-layout/layout-7/index.vue'
</script>

<template>
  <Layout7>
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
