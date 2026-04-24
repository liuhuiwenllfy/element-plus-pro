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
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24"><!-- Icon from Flowbite Icons by Themesberg - https://github.com/themesberg/flowbite-icons/blob/main/LICENSE --><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 10h-4v-.5C17.099 8.467 19.75 7 19.75 6V5a1 1 0 0 0-1-1H17a1 1 0 0 0-1 1M4 7.303l9.122 11.394m0-11.394L4 18.697"/></svg></template>

<style lang="scss" scoped>

</style>
