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
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24"><!-- Icon from Flowbite Icons by Themesberg - https://github.com/themesberg/flowbite-icons/blob/main/LICENSE --><path fill="currentColor" fill-rule="evenodd" d="M21.707 21.707a1 1 0 0 1-1.414 0l-3.5-3.5a1 1 0 0 1 1.414-1.414l3.5 3.5a1 1 0 0 1 0 1.414M2 10a8 8 0 1 1 16 0a8 8 0 0 1-16 0m4 0a1 1 0 0 0 1 1h6a1 1 0 1 0 0-2H7a1 1 0 0 0-1 1" clip-rule="evenodd"/></svg></template>

<style lang="scss" scoped>

</style>
