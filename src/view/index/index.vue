<script lang="ts" setup>
import Layout1 from '@/view/index/layout/layout1/index.vue'
import Layout2 from '@/view/index/layout/layout2/index.vue'
import Layout3 from '@/view/index/layout/layout3/index.vue'
import Layout4 from '@/view/index/layout/layout4/index.vue'
import Layout5 from '@/view/index/layout/layout5/index.vue'
import Layout6 from '@/view/index/layout/layout6/index.vue'
import Layout7 from '@/view/index/layout/layout7/index.vue'
import {useCommonStore} from "@/pinia/common.ts";

const commonStore = useCommonStore()

</script>

<template>
  <Layout1 v-if="commonStore.layout === 1"/>
  <Layout2 v-if="commonStore.layout === 2"/>
  <Layout3 v-if="commonStore.layout === 3"/>
  <Layout4 v-if="commonStore.layout === 4"/>
  <Layout5 v-if="commonStore.layout === 5"/>
  <Layout6 v-if="commonStore.layout === 6"/>
  <Layout7 v-if="commonStore.layout === 7"/>
</template>

<style lang="scss" scoped>

</style>
