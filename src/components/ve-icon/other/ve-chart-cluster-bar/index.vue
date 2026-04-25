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
  <svg :height="size" :width="size" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 30H4a2 2 0 0 1-2-2V2h2v26h26Z" fill="currentColor"/>
    <path d="M10 16h2v10h-2zm-3 6h2v4H7zM26 8h2v18h-2zm-3 6h2v12h-2zm-6 12h-2V12h2zm3 0h-2v-8h2z" fill="currentColor"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
