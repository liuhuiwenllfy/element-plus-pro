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
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24"><!-- Icon from Flowbite Icons by Themesberg - https://github.com/themesberg/flowbite-icons/blob/main/LICENSE --><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path stroke-linejoin="round" d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2"/><path d="M12 15.5V4"/><path stroke-linejoin="round" d="m8 12l4 4l4-4"/></g></svg>
</template>

<style lang="scss" scoped>

</style>
