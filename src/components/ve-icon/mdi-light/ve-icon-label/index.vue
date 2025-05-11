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
          d="M6 6h8c.97 0 1.83.46 2.38 1.18l4.16 5.32l-4.16 5.32C15.83 18.54 14.97 19 14 19H6a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3m9.58 11.23l3.69-4.73l-3.69-4.73C15.21 7.3 14.64 7 14 7H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8c.64 0 1.21-.3 1.58-.77"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
