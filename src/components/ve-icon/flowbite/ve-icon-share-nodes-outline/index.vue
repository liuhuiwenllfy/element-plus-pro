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
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24"><!-- Icon from Flowbite Icons by Themesberg - https://github.com/themesberg/flowbite-icons/blob/main/LICENSE --><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.926 10.898L15 7.727m-7.074 5.39L15 16.29M8 12a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Zm12 5.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Zm0-11a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"/></svg></template>

<style lang="scss" scoped>

</style>
