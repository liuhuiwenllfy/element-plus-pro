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
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24"><!-- Icon from Flowbite Icons by Themesberg - https://github.com/themesberg/flowbite-icons/blob/main/LICENSE --><path fill="currentColor" fill-rule="evenodd" d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm4.996 2a1 1 0 0 0 0 2h.01a1 1 0 1 0 0-2zM11 8a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2zm-4.004 3a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2zM11 11a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2zm-4.004 3a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2zM11 14a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2z" clip-rule="evenodd"/></svg></template>

<style lang="scss" scoped>

</style>
