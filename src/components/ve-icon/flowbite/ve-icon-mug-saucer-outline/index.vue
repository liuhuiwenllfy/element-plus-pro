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
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24"><!-- Icon from Flowbite Icons by Themesberg - https://github.com/themesberg/flowbite-icons/blob/main/LICENSE --><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 8h2a2 2 0 1 1 0 4h-2.5M5 19h11M5 6l.64 6.398A4 4 0 0 0 9.62 16h.76a4 4 0 0 0 3.98-3.602L15 6z"/></svg></template>

<style lang="scss" scoped>

</style>
