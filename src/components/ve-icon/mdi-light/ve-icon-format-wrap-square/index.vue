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
          d="m11.5 8l4.5 9H7zm0 2.24L8.62 16h5.76zM3 16h2v1H3zm0-4h2v1H3zm0-4h2v1H3zm15 0h2v1h-2zm0 4h2v1h-2zm0 4h2v1h-2zm2 4v1H3v-1zM3 4h17v1H3z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
