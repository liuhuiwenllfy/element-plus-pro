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
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24"><!-- Icon from Flowbite Icons by Themesberg - https://github.com/themesberg/flowbite-icons/blob/main/LICENSE --><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 13c0-.888.402-2.383 1-3.272M18.05 14a6 6 0 1 1-12 0c0-3.314 2.686-10 6-10s6 6.686 6 10"/></svg></template>

<style lang="scss" scoped>

</style>
