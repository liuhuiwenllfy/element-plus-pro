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
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24"><!-- Icon from Flowbite Icons by Themesberg - https://github.com/themesberg/flowbite-icons/blob/main/LICENSE --><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21l-3.5-3.5M7 10h6m4 0a7 7 0 1 1-14 0a7 7 0 0 1 14 0Z"/></svg></template>

<style lang="scss" scoped>

</style>
