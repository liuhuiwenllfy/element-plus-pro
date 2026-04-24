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
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24"><!-- Icon from Flowbite Icons by Themesberg - https://github.com/themesberg/flowbite-icons/blob/main/LICENSE --><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path d="M20 9H8a5 5 0 0 0-5 5v0a5 5 0 0 0 5 5h9"/><path stroke-linejoin="round" d="m17 5l4 4l-4 4"/></g></svg></template>

<style lang="scss" scoped>

</style>
