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
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24"><!-- Icon from Flowbite Icons by Themesberg - https://github.com/themesberg/flowbite-icons/blob/main/LICENSE --><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.315 7c1.419 0 1.419 1.5 2.837 1.5S10.571 7 11.99 7s1.419 1.5 2.837 1.5S17.663 7 17.663 7M6 3l1.076 16.133A2 2 0 0 0 9.07 21h5.858a2 2 0 0 0 1.995-1.867L18 3z"/></svg></template>

<style lang="scss" scoped>

</style>
