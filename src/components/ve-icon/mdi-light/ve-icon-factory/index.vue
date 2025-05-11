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
          d="m2 8l7 4.04V8l7 4V3h5v19H2zm15 6l-7-4.27v4.04L3 9.73V21h17V4h-3zM5 15h3v1H5zm0 3h5v1H5zm7-3h3v1h-3zm0 3h6v1h-6z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
