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
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24"><!-- Icon from Flowbite Icons by Themesberg - https://github.com/themesberg/flowbite-icons/blob/main/LICENSE --><path fill="currentColor" d="M12.864 3.496a1 1 0 0 0-1.728 0l-3.5 6A1 1 0 0 0 8.5 11h7a1 1 0 0 0 .864-1.504zM4 13a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm12.5-1a4.5 4.5 0 1 0 0 9a4.5 4.5 0 0 0 0-9"/></svg></template>

<style lang="scss" scoped>

</style>
