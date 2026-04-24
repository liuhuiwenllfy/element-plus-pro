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
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24"><!-- Icon from Flowbite Icons by Themesberg - https://github.com/themesberg/flowbite-icons/blob/main/LICENSE --><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 8v8m0-8h8M8 8H6a2 2 0 1 1 2-2zm0 8h8m-8 0H6a2 2 0 1 0 2 2zm8 0V8m0 8h2a2 2 0 1 1-2 2zm0-8h2a2 2 0 1 0-2-2z"/></svg></template>

<style lang="scss" scoped>

</style>
