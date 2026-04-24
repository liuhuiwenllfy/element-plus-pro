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
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24"><!-- Icon from Flowbite Icons by Themesberg - https://github.com/themesberg/flowbite-icons/blob/main/LICENSE --><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 18a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0 0V6.333L18 4v11.667M8 10.333L18 8m0 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0"/></svg></template>

<style lang="scss" scoped>

</style>
