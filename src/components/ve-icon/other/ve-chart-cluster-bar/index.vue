<script lang="ts" setup>

defineProps({
  size: {
    type: String,
    required: false,
    default: () => '16'
  },
  color: {
    type: String,
    required: false,
    default: () => 'currentColor'
  }
})

</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" :height="size" :width="size" viewBox="0 0 32 32">
    <path :fill="color" d="M30 30H4a2 2 0 0 1-2-2V2h2v26h26Z"/>
    <path :fill="color" d="M10 16h2v10h-2zm-3 6h2v4H7zM26 8h2v18h-2zm-3 6h2v12h-2zm-6 12h-2V12h2zm3 0h-2v-8h2z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
