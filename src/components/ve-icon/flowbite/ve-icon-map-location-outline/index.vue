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
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24"><!-- Icon from Flowbite Icons by Themesberg - https://github.com/themesberg/flowbite-icons/blob/main/LICENSE --><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12 13a3 3 0 1 0 0-6a3 3 0 0 0 0 6"/><path d="M17.8 14a7 7 0 1 0-11.5 0h0l.1.3l.3.3L12 21l5.1-6.2l.6-.7l.1-.2Z"/></g></svg></template>

<style lang="scss" scoped>

</style>
