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
          d="m6.59 21l-4.9-8.5L6.6 4h9.81l4.91 8.5l-4.91 8.5zm9.24-16H7.18l-4.34 7.5L7.17 20h8.66l4.33-7.5z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
