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
          d="M6 6h11a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3m0 1a2 2 0 0 0-2 2h15a2 2 0 0 0-2-2zm-2 9a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-4H4zm2-1h3v1H6zm5 0h2v1h-2zm-7-5v1h15v-1zM3 3h2v1H3a2 2 0 0 0-2 2v2H0V6a3 3 0 0 1 3-3M1 19a2 2 0 0 0 2 2h2v1H3a3 3 0 0 1-3-3v-2h1zM20 3a3 3 0 0 1 3 3v2h-1V6a2 2 0 0 0-2-2h-2V3zm3 16a3 3 0 0 1-3 3h-2v-1h2a2 2 0 0 0 2-2v-2h1z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
