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
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24"><!-- Icon from Flowbite Icons by Themesberg - https://github.com/themesberg/flowbite-icons/blob/main/LICENSE --><g fill="currentColor"><path d="M2.038 5.61A2 2 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6q0-.18-.03-.352l-.866.65l-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z"/><path d="M20.677 4.117A2 2 0 0 0 20 4H4q-.338.002-.642.105l.758.607L12 10.742L19.9 4.7z"/></g></svg></template>

<style lang="scss" scoped>

</style>
