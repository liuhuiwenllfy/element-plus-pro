<script lang="ts" setup>
import Main from '@/view/index/main/index.vue'
import Header from '@/view/index/header/index.vue'
import Aside from '@/view/index/aside/index.vue'
import Layout4 from 've-layout/layout-4/index.vue'
</script>

<template>
  <Layout4>
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
</template>

<style lang="scss" scoped>

</style>
