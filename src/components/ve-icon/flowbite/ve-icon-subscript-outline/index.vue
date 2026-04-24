<script lang="ts" setup>

defineProps({
  size: {
    type: String,
    required: false,
    default: () => '16'
  }
})

</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24"><!-- Icon from Flowbite Icons by Themesberg - https://github.com/themesberg/flowbite-icons/blob/main/LICENSE --><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 20h-4v-.5c1.099-1.033 3.75-2.5 3.75-3.5v-1a1 1 0 0 0-1-1H17a1 1 0 0 0-1 1M4 4l9.122 11.393m0-11.393L4 15.393"/></svg></template>

<style lang="scss" scoped>

</style>
