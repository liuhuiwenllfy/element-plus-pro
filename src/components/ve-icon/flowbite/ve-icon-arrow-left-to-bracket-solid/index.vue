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
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24"><!-- Icon from Flowbite Icons by Themesberg - https://github.com/themesberg/flowbite-icons/blob/main/LICENSE --><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path d="M15.5 12H4"/><path stroke-linejoin="round" d="M15 4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"/><path stroke-linejoin="round" d="m12 16l4-4l-4-4"/></g></svg>
</template>

<style lang="scss" scoped>

</style>
