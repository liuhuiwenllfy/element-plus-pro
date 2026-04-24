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
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24"><!-- Icon from Flowbite Icons by Themesberg - https://github.com/themesberg/flowbite-icons/blob/main/LICENSE --><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.714 15h4.268c.404 0 .732-.384.732-.857V3.857c0-.473-.328-.857-.732-.857H6.714a1 1 0 0 0-1 1v4m11 7v-3h3v3zm-3 6h-7a1 1 0 0 1-1-1a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3a1 1 0 0 1-1 1m-1-9.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"/></svg>
</template>

<style lang="scss" scoped>

</style>
