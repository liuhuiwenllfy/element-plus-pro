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
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24"><!-- Icon from Flowbite Icons by Themesberg - https://github.com/themesberg/flowbite-icons/blob/main/LICENSE --><path fill="currentColor" fill-rule="evenodd" d="M5 8a4 4 0 1 1 8 0a4 4 0 0 1-8 0m-2 9a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm13-6a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2z" clip-rule="evenodd"/></svg></template>

<style lang="scss" scoped>

</style>
