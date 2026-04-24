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
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24"><!-- Icon from Flowbite Icons by Themesberg - https://github.com/themesberg/flowbite-icons/blob/main/LICENSE --><g fill="currentColor"><path fill-rule="evenodd" d="M4 5.786C4 4.809 4.786 4 5.778 4h12.444C19.214 4 20 4.81 20 5.786V15H4zM12 12a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1M8.276 6.31a1 1 0 0 1 1.414-.034l2.625 2.5a1 1 0 0 1 0 1.448l-2.625 2.5a1 1 0 1 1-1.38-1.448L10.175 9.5L8.31 7.724a1 1 0 0 1-.034-1.414" clip-rule="evenodd"/><path d="M2 17v1a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-1z"/></g></svg></template>

<style lang="scss" scoped>

</style>
