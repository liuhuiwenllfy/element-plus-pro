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
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24"><!-- Icon from Flowbite Icons by Themesberg - https://github.com/themesberg/flowbite-icons/blob/main/LICENSE --><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7.286 11l5-6l5 6m-10 0h-3v8h8m-5-8h-4l3-4h4.337zm10 0h3v1m-3-1h4l-3-4h-4.338zm-2 6l2 2l4-4m-7-2a2 2 0 1 1-4 0a2 2 0 0 1 4 0"/></svg></template>

<style lang="scss" scoped>

</style>
