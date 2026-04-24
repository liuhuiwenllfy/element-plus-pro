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
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24"><!-- Icon from Flowbite Icons by Themesberg - https://github.com/themesberg/flowbite-icons/blob/main/LICENSE --><g fill="currentColor"><path fill-rule="evenodd" d="M17.4 3c.3 0 .6.1.7.3l2.6 2.6c.4.3.4 1 0 1.4l-2.5 2.5l-4-4l2.5-2.5c.2-.2.5-.3.7-.3m-4.6 4.2l-9.5 9.5a1 1 0 0 0 0 1.4l2.6 2.6c.3.4 1 .4 1.4 0l9.5-9.5zM6 6c.6 0 1 .4 1 1v1h1a1 1 0 0 1 0 2H7v1a1 1 0 1 1-2 0v-1H4a1 1 0 0 1 0-2h1V7c0-.6.4-1 1-1m9 9c.6 0 1 .4 1 1v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 1 1 0-2h1v-1c0-.6.4-1 1-1" clip-rule="evenodd"/><path d="M19 13h-2v2h2zM13 3h-2v2h2zm-2 2H9v2h2zM9 3H7v2h2zm12 8h-2v2h2zm0 4h-2v2h2z"/></g></svg></template>

<style lang="scss" scoped>

</style>
