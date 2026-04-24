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
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24"><!-- Icon from Flowbite Icons by Themesberg - https://github.com/themesberg/flowbite-icons/blob/main/LICENSE --><path fill="currentColor" fill-rule="evenodd" d="M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-6.616l-2.88 2.592C8.537 20.461 7 19.776 7 18.477V17H5a2 2 0 0 1-2-2zm4 2a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2zm8 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm-8 3a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm5 0a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2z" clip-rule="evenodd"/></svg></template>

<style lang="scss" scoped>

</style>
