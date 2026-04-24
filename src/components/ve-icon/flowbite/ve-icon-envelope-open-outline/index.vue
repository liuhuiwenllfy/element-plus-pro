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
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24"><!-- Icon from Flowbite Icons by Themesberg - https://github.com/themesberg/flowbite-icons/blob/main/LICENSE --><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 8v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8m18 0l-8.029-4.46a2 2 0 0 0-1.942 0L3 8m18 0l-9 6.5L3 8"/></svg></template>

<style lang="scss" scoped>

</style>
