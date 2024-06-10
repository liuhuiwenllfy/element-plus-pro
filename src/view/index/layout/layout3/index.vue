<script lang="ts" setup>
import Main from '@/view/index/main/index.vue'
import Aside from '@/view/index/aside/index.vue'
import Layout3 from '@/components/ve-layout/layout-3/index.vue'
</script>

<template>
  <Layout3>
    <template #asideArea>
      <Aside/>
    </template>
    <template #mainArea>
      <Main/>
    </template>
  </Layout3>
</template>

<style lang="scss" scoped>

</style>
