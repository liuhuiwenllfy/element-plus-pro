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
          d="m8.5 17.5l.71-.71l3.5 3.5l7.79-7.79l.71.71l-8.5 8.5zM4.71 13L3.5 16h-1L7.35 4h1.4l4.85 12h-1l-1.21-3zm.41-1H11L8.05 4.74z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
