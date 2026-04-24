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
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24"><!-- Icon from Flowbite Icons by Themesberg - https://github.com/themesberg/flowbite-icons/blob/main/LICENSE --><path fill="currentColor" fill-rule="evenodd" d="M6 5V4a1 1 0 1 1 2 0v1h3V4a1 1 0 1 1 2 0v1h3V4a1 1 0 1 1 2 0v1h1a2 2 0 0 1 2 2v2H3V7a2 2 0 0 1 2-2zM3 19v-8h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2m5-6a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z" clip-rule="evenodd"/></svg>
</template>

<style lang="scss" scoped>

</style>
