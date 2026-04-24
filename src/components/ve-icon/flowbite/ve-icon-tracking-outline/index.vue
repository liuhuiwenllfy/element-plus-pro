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
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24"><!-- Icon from Flowbite Icons by Themesberg - https://github.com/themesberg/flowbite-icons/blob/main/LICENSE --><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 19h4m6 0h4m-6.963-4.384V8.634L17 5.94m-4.93 2.662L7.042 5.94M12 2.997l5.033 2.906v5.812L12 14.62l-5.033-2.906V5.903zM14 19a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z"/></svg></template>

<style lang="scss" scoped>

</style>
