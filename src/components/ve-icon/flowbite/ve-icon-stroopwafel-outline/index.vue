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
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24"><!-- Icon from Flowbite Icons by Themesberg - https://github.com/themesberg/flowbite-icons/blob/main/LICENSE --><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9h-5m-4 9a9 9 0 0 1-9-9m9 9v-5m-9-4a9 9 0 0 1 9-9m-9 9h5m4-9v5M8 3.936V8m0 0v4m0-4H3.936M8 8h4m-4 4v4m0-4h4m-4 4v4.065M8 16H3.936M8 16h4m0-8v4m0-4h4m-4 4v4m0-4h4m-4 4h4m0-12.064V8m0 0v4m0-4h4.065M16 12v4m0 0v4.065M16 16h4.065"/></svg></template>

<style lang="scss" scoped>

</style>
