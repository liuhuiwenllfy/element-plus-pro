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
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24"><!-- Icon from Flowbite Icons by Themesberg - https://github.com/themesberg/flowbite-icons/blob/main/LICENSE --><path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M4.071 14v6h6v-6zm4.5-4h7l-3.5-6zm8 10a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7Z"/></svg></template>

<style lang="scss" scoped>

</style>
