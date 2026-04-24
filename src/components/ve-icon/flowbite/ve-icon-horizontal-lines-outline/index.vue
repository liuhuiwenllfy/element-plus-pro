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
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24"><!-- Icon from Flowbite Icons by Themesberg - https://github.com/themesberg/flowbite-icons/blob/main/LICENSE --><g fill="none" stroke="currentColor" stroke-linecap="round"><path stroke-width="2" d="M5 12h14"/><path d="M6 9.5h12m-12-2h12m-12-2h12m-12 13h12m-12-2h12m-12-2h12"/></g></svg></template>

<style lang="scss" scoped>

</style>
