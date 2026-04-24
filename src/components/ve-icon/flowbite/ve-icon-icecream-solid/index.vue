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
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24"><!-- Icon from Flowbite Icons by Themesberg - https://github.com/themesberg/flowbite-icons/blob/main/LICENSE --><g fill="currentColor"><path d="M6.083 7A6.002 6.002 0 0 1 18 8h-2.5a2.5 2.5 0 0 0-2.5 2.5a.5.5 0 0 1-1 0V10a3 3 0 0 0-3-3z"/><path d="M6 9v5a2 2 0 0 0 2 2h3v5a1 1 0 1 0 2 0v-5h3a2 2 0 0 0 2-2v-4h-2.5a.5.5 0 0 0-.5.5a2.5 2.5 0 0 1-5 0V10a1 1 0 0 0-1-1z"/></g></svg></template>

<style lang="scss" scoped>

</style>
