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
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24"><!-- Icon from Flowbite Icons by Themesberg - https://github.com/themesberg/flowbite-icons/blob/main/LICENSE --><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.484 9.166L15 7h5m0 0l-3-3m3 3l-3 3M4 17h4l1.577-2.253M4 7h4l7 10h5m0 0l-3 3m3-3l-3-3"/></svg></template>

<style lang="scss" scoped>

</style>
