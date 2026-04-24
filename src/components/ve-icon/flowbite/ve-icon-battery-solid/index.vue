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
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24"><!-- Icon from Flowbite Icons by Themesberg - https://github.com/themesberg/flowbite-icons/blob/main/LICENSE --><g fill="currentColor"><path d="M7 13v-2h7v2z"/><path fill-rule="evenodd" d="M2 8a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm4 1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z" clip-rule="evenodd"/><path d="M22 14v-4a1 1 0 0 0-1-1h-1v6h1a1 1 0 0 0 1-1"/></g></svg>
</template>

<style lang="scss" scoped>

</style>
