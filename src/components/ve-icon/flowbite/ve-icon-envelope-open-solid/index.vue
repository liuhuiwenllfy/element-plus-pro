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
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24"><!-- Icon from Flowbite Icons by Themesberg - https://github.com/themesberg/flowbite-icons/blob/main/LICENSE --><g fill="currentColor"><path d="m3.62 6.389l8.396 6.724l8.638-6.572l-7.69-4.29a1.98 1.98 0 0 0-1.928 0z"/><path d="m22 8.053l-8.784 6.683a1.98 1.98 0 0 1-2.44-.031L2.02 7.693a1 1 0 0 0-.019.199v11.065C2 20.637 3.343 22 5 22h14c1.657 0 3-1.362 3-3.043z"/></g></svg></template>

<style lang="scss" scoped>

</style>
