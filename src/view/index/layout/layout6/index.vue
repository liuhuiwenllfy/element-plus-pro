<script lang="ts" setup>
import Main from '@/view/index/main/index.vue'
import Header from '@/view/index/header/index.vue'
import Aside from '@/view/index/aside/index.vue'

import Layout6 from '@/components/ve-layout/layout-6/index.vue'
</script>

<template>
  <Layout6>
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
</template>

<style lang="scss" scoped>

</style>
