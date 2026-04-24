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
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24"><!-- Icon from Flowbite Icons by Themesberg - https://github.com/themesberg/flowbite-icons/blob/main/LICENSE --><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.505 14.495L21 12m0 0l-2.495-2.495M21 12h-5.948m-9.498 2.554L3 12m0 0l2.554-2.554M3 12h5.832M9 19V5h6v14z"/></svg></template>

<style lang="scss" scoped>

</style>
