<script lang="ts" setup>
import Main from '@/view/index/main/index.vue'
import Header from '@/view/index/header/index.vue'
import Footer from '@/view/index/footer/index.vue'
import Layout2 from 've-layout/layout-2/index.vue'
</script>

<template>
  <Layout2>
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
</template>

<style lang="scss" scoped>

</style>
