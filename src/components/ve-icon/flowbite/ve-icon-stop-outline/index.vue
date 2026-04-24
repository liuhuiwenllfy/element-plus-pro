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
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24"><!-- Icon from Flowbite Icons by Themesberg - https://github.com/themesberg/flowbite-icons/blob/main/LICENSE --><rect width="12" height="12" x="6" y="6" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" rx="1"/></svg></template>

<style lang="scss" scoped>

</style>
