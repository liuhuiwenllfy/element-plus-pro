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
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24"><!-- Icon from Flowbite Icons by Themesberg - https://github.com/themesberg/flowbite-icons/blob/main/LICENSE --><g fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6s4.03-6 9-6s9 4.8 9 6Z"/><path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"/></g></svg></template>

<style lang="scss" scoped>

</style>
