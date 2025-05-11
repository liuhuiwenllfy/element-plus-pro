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
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24">
    <!-- Icon from Material Design Light by Pictogrammers - https://github.com/Templarian/MaterialDesignLight/blob/master/LICENSE.md -->
    <path :fill="color"
          d="M5 16a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0 1a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m-3-6c6.08 0 11 4.92 11 11h-1A10 10 0 0 0 2 12zm0-4a15 15 0 0 1 15 15h-1A14 14 0 0 0 2 8zm0-4c10.5 0 19 8.5 19 19h-1A18 18 0 0 0 2 4z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
