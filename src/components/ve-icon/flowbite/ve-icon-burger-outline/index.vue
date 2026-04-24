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
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24"><!-- Icon from Flowbite Icons by Themesberg - https://github.com/themesberg/flowbite-icons/blob/main/LICENSE --><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 12l2.667-1l2.666 1L12 11l2.667 1l2.666-1L20 12m-1 5H5v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2zM5 9h14V8a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4zm13.5 5h-13a1.5 1.5 0 0 0 0 3h13a1.5 1.5 0 1 0 0-3"/></svg>
</template>

<style lang="scss" scoped>

</style>
