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
          d="M20 4v1H3V4zm-9 4v1H3V8zm-8 4h5v1H3zm0 4h13v1H3zm0 4h17v1H3zM20 7v7h-7V7zm-1 1h-5v5h5z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
