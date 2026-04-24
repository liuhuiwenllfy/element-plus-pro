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
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24"><!-- Icon from Flowbite Icons by Themesberg - https://github.com/themesberg/flowbite-icons/blob/main/LICENSE --><path fill="currentColor" d="M4 5v2H3a1 1 0 0 0 0 2h1v10a1 1 0 1 0 2 0V9h2v5.586c0 1.782 2.154 2.674 3.414 1.414l.586-.586l.586.586a2 2 0 0 0 2.828 0l.586-.586l.586.586c.411.411.918.593 1.414.59V19a1 1 0 1 0 2 0V9h1a1 1 0 1 0 0-2h-1V6a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v1H6V5a1 1 0 0 0-2 0"/></svg>
</template>

<style lang="scss" scoped>

</style>
