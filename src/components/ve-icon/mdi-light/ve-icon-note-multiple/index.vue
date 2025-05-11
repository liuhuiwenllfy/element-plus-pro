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
          d="M17 12a3 3 0 0 1-3-3V5H6a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-6zm-2-3a2 2 0 0 0 2 2h3.59L15 5.41zM6 4h9l7 7v7a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3m0 19a5 5 0 0 1-5-5V8h1v10a4 4 0 0 0 4 4h12v1z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
