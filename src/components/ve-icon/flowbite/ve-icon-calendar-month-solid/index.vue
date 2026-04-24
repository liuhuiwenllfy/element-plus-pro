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
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24"><!-- Icon from Flowbite Icons by Themesberg - https://github.com/themesberg/flowbite-icons/blob/main/LICENSE --><path fill="currentColor" fill-rule="evenodd" d="M5 5a1 1 0 0 0 1-1a1 1 0 1 1 2 0a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1a1 1 0 1 1 2 0a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1a1 1 0 1 1 2 0a1 1 0 0 0 1 1a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2M3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2m6.01-6a1 1 0 1 0-2 0a1 1 0 0 0 2 0m2 0a1 1 0 1 1 2 0a1 1 0 0 1-2 0m6 0a1 1 0 1 0-2 0a1 1 0 0 0 2 0m-10 4a1 1 0 1 1 2 0a1 1 0 0 1-2 0m6 0a1 1 0 1 0-2 0a1 1 0 0 0 2 0m2 0a1 1 0 1 1 2 0a1 1 0 0 1-2 0" clip-rule="evenodd"/></svg>
</template>

<style lang="scss" scoped>

</style>
