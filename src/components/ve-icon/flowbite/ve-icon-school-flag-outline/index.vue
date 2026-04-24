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
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24"><!-- Icon from Flowbite Icons by Themesberg - https://github.com/themesberg/flowbite-icons/blob/main/LICENSE --><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 20v-9l-4 1.125V20zm0 0h8m-8 0V6.667M16 20v-9l4 1.125V20zm0 0V7m0 0V4h4v3zM6 8l6-4l4 2.667M11 9h2m-2 3h2"/></svg></template>

<style lang="scss" scoped>

</style>
