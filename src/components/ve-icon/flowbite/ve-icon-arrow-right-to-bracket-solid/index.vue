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
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24"><!-- Icon from Flowbite Icons by Themesberg - https://github.com/themesberg/flowbite-icons/blob/main/LICENSE --><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path d="M19.5 12H8"/><path stroke-linejoin="round" d="M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2m7-4l4-4l-4-4"/></g></svg>
</template>

<style lang="scss" scoped>

</style>
