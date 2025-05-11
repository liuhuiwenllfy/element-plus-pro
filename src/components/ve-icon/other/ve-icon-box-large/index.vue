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
  <svg :height="size" :width="size" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <path d="M26 28H6a2.002 2.002 0 0 1-2-2V9h2v17h20V9h2v17a2.002 2.002 0 0 1-2 2" :fill="color"/>
    <path :fill="color" d="M14 21V9h-2v14h8v-2zM4 4h24v2H4z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
