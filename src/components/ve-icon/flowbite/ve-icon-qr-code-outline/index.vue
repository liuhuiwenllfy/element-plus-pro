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
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24"><!-- Icon from Flowbite Icons by Themesberg - https://github.com/themesberg/flowbite-icons/blob/main/LICENSE --><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"><path d="M4 4h6v6H4zm10 10h6v6h-6zm0-10h6v6h-6zm-4 10h.01v.01H10zm0 4h.01v.01H10zm-3 2h.01v.01H7zm0-4h.01v.01H7zm-3 2h.01v.01H4zm0-4h.01v.01H4z"/><path d="M7 7h.01v.01H7zm10 10h.01v.01H17z"/></g></svg></template>

<style lang="scss" scoped>

</style>
