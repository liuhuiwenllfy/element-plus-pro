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
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24"><!-- Icon from Flowbite Icons by Themesberg - https://github.com/themesberg/flowbite-icons/blob/main/LICENSE --><path fill="currentColor" d="M12.356 3.066a1 1 0 0 0-.712 0l-7 2.666A1 1 0 0 0 4 6.68a17.7 17.7 0 0 0 2.022 7.98a17.4 17.4 0 0 0 5.403 6.158a1 1 0 0 0 1.15 0a17.4 17.4 0 0 0 5.402-6.157A17.7 17.7 0 0 0 20 6.68a1 1 0 0 0-.644-.949z"/></svg></template>

<style lang="scss" scoped>

</style>
