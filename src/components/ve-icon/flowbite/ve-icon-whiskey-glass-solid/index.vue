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
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24"><!-- Icon from Flowbite Icons by Themesberg - https://github.com/themesberg/flowbite-icons/blob/main/LICENSE --><path fill="currentColor" fill-rule="evenodd" d="M6 6a1 1 0 0 0-.997 1.083l.848 10.166A3 3 0 0 0 8.84 20h6.319a3 3 0 0 0 2.99-2.75l.847-10.167A1 1 0 0 0 18 6zm1.503 7l-.416-5h9.826l-.417 5z" clip-rule="evenodd"/></svg></template>

<style lang="scss" scoped>

</style>
