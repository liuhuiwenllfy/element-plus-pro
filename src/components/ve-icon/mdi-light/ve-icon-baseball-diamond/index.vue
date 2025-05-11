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
          d="M11.5 3C4.82 3 1 10 1 10l7.86 8.23c.21-.23.46-.48.74-.66L6.2 14l5.3-5.29L16.8 14l-3.4 3.57c.28.18.53.43.74.66L22 10s-3.82-7-10.5-7m0 4.29l-6 5.99l-3.24-3.41C3.32 8.25 6.6 4 11.5 4c4.88 0 8.17 4.26 9.24 5.87l-3.24 3.41zm1 6.71c0 .55-.45 1-1 1s-1-.45-1-1s.45-1 1-1s1 .45 1 1m.5 7l-1.5 1l-1.5-1v-2h3z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
