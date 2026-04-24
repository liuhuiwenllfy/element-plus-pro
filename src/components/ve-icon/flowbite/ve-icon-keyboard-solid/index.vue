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
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24"><!-- Icon from Flowbite Icons by Themesberg - https://github.com/themesberg/flowbite-icons/blob/main/LICENSE --><path fill="currentColor" fill-rule="evenodd" d="M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm5.01 1H5v2.01h2.01zm3 0H8v2.01h2.01zm3 0H11v2.01h2.01zm3 0H14v2.01h2.01zm3 0H17v2.01h2.01zm-12 3H5v2.01h2.01zm3 0H8v2.01h2.01zm3 0H11v2.01h2.01zm3 0H14v2.01h2.01zm3 0H17v2.01h2.01zm-12 3H5v2.01h2.01zM8 14l-.001 2l8.011.01V14zm11.01 0H17v2.01h2.01z" clip-rule="evenodd"/></svg></template>

<style lang="scss" scoped>

</style>
