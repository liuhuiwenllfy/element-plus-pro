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
  <svg :height="size" :width="size" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path :fill="color" d="M16 3h6v6h-2V5h-4zM2 3h6v2H4v4H2zm18 16v-4h2v6h-6v-2zM4 19h4v2H2v-6h2z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
