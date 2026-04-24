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
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24"><!-- Icon from Flowbite Icons by Themesberg - https://github.com/themesberg/flowbite-icons/blob/main/LICENSE --><g fill="currentColor"><path d="M13 21h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-6z"/><path fill-rule="evenodd" d="M11 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6zm-5.707 7.707a1 1 0 0 1 1.414-1.414l2 2a1 1 0 0 1 0 1.414l-2 2a1 1 0 0 1-1.414-1.414L6.586 12z" clip-rule="evenodd"/></g></svg></template>

<style lang="scss" scoped>

</style>
