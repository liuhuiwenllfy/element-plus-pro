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
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24"><!-- Icon from Flowbite Icons by Themesberg - https://github.com/themesberg/flowbite-icons/blob/main/LICENSE --><path fill="currentColor" fill-rule="evenodd" d="M8.5 4a4.5 4.5 0 0 0 0 9H11v6a1 1 0 1 0 2 0V6h2v13a1 1 0 1 0 2 0V6h2a1 1 0 1 0 0-2z" clip-rule="evenodd"/></svg></template>

<style lang="scss" scoped>

</style>
