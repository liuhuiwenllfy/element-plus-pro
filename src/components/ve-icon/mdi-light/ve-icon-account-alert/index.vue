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
          d="M10.5 14c4.14 0 7.5 1.57 7.5 3.5V20H3v-2.5c0-1.93 3.36-3.5 7.5-3.5m6.5 3.5c0-1.38-2.91-2.5-6.5-2.5S4 16.12 4 17.5V19h13zM10.5 5A3.5 3.5 0 0 1 14 8.5a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 7 8.5A3.5 3.5 0 0 1 10.5 5m0 1A2.5 2.5 0 0 0 8 8.5a2.5 2.5 0 0 0 2.5 2.5A2.5 2.5 0 0 0 13 8.5A2.5 2.5 0 0 0 10.5 6M20 16v-1h1v1zm0-3V7h1v6z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
