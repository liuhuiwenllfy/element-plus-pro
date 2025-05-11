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
          d="M18 6v8l-1.95 4h-4.2l1.95-4H12V6zm-1 7.77V7h-4v6h2.4l-1.95 4h1.97zM11 6v8l-1.95 4h-4.2l1.95-4H5V6zm-1 7.77V7H6v6h2.4l-1.95 4h1.97z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
