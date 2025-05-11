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
          d="M2 4h8a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1h8v1h-1v11h-5.73l1.61 6h-1.04l-1.61-6H9.77l-1.61 6H7.12l1.61-6H3V5H2zm17 11V5H4v10z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
