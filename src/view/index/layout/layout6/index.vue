<script lang="ts" setup>
import Main from '@/view/index/main/index.vue'
import Header from '@/view/index/header/index.vue'
import Layout1 from 've-layout/layout-1/index.vue'
</script>

<template>
  <Layout1>
    <template #headerArea>
      <Header/>
    </template>
    <template #mainArea>
      <Main/>
    </template>
  </Layout1>
</template>

<style lang="scss" scoped>
 
</style>
