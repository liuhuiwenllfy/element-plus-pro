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
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24"><!-- Icon from Flowbite Icons by Themesberg - https://github.com/themesberg/flowbite-icons/blob/main/LICENSE --><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 18v2H4V4h6v2m4 12v2h6V4h-6v2m-6.495 8.495L10 12m0 0L7.505 9.505M10 12H4.052m12.502 2.554L14 12m0 0l2.554-2.554M14 12h5.832"/></svg></template>

<style lang="scss" scoped>

</style>
