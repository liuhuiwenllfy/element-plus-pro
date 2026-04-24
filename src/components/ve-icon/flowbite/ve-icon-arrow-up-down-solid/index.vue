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
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24"><!-- Icon from Flowbite Icons by Themesberg - https://github.com/themesberg/flowbite-icons/blob/main/LICENSE --><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path d="M8 20V7m8-3v13"/><path stroke-linejoin="round" d="m4 16l4 4l4-4m8-8l-4-4l-4 4"/></g></svg>
</template>

<style lang="scss" scoped>

</style>
