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
          d="m2.79 4.46l.71-.71L20.25 20.5l-.71.71l-2.24-2.24c-.98.57-2.1.93-3.3 1.03v-1a6.8 6.8 0 0 0 2.57-.77l-1.51-1.51c-.34.13-.69.21-1.06.25v-1.01c.09-.01.17-.02.25-.04L12 13.66V20h-2l-4-4H2V9h4l.67-.67zM21 12.5c0 2.03-.81 3.87-2.12 5.22l-.7-.72A6.43 6.43 0 0 0 20 12.5c0-3.42-2.64-6.23-6-6.5V5c3.91.27 7 3.53 7 7.5m-3 0c0 1.2-.47 2.29-1.24 3.1l-.7-.71c.58-.62.94-1.47.94-2.39c0-1.76-1.3-3.22-3-3.46V8.03c2.25.25 4 2.15 4 4.47m-3 0c0 .37-.14.71-.36 1l-.64-.66v-1.75c.58.2 1 .76 1 1.41M6.41 10H3v5h3.41l4 4H11v-6.34L7.38 9.04zM10 5h2v5.84l-1-1V6h-.59L8.79 7.63l-.71-.71z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
