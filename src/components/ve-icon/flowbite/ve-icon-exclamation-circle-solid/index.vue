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
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24"><!-- Icon from Flowbite Icons by Themesberg - https://github.com/themesberg/flowbite-icons/blob/main/LICENSE --><path fill="currentColor" fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m11-4a1 1 0 1 0-2 0v5a1 1 0 1 0 2 0zm-1 7a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2z" clip-rule="evenodd"/></svg></template>

<style lang="scss" scoped>

</style>
