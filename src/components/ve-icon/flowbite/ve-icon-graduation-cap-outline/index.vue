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
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24"><!-- Icon from Flowbite Icons by Themesberg - https://github.com/themesberg/flowbite-icons/blob/main/LICENSE --><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3.786 9.5l9 4.5l9-4.5l-9-4.5zm0 0V17m3-6v6.222c0 .348 2 1.778 6 1.778s6-1.374 6-1.778V11"/></svg></template>

<style lang="scss" scoped>

</style>
