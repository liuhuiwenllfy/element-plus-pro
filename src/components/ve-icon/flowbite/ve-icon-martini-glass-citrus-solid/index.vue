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
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24"><!-- Icon from Flowbite Icons by Themesberg - https://github.com/themesberg/flowbite-icons/blob/main/LICENSE --><path fill="currentColor" fill-rule="evenodd" d="M4 7h8.028a4.5 4.5 0 1 1 2.076 4.31L11 14.414V19h2a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2h2v-4.586L3.293 8.707A1 1 0 0 1 4 7m12 0h-1.95a2.5 2.5 0 1 1 1.536 2.828l1.121-1.12A1 1 0 0 0 16 7" clip-rule="evenodd"/></svg></template>

<style lang="scss" scoped>

</style>
