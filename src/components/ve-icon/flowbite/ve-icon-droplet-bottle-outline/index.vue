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
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24"><!-- Icon from Flowbite Icons by Themesberg - https://github.com/themesberg/flowbite-icons/blob/main/LICENSE --><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 6h6m-5-3v6c-2 1.5-3 3.5-3 5.5V19a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-4.5c0-2-1-4-3-5.5V3zm4 13a2 2 0 1 1-4 0c0-1.105 1.885-4 2-4s2 2.895 2 4"/></svg></template>

<style lang="scss" scoped>

</style>
