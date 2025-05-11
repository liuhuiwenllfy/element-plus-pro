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
          d="M11 13V4h1v9zm8-.5a7.5 7.5 0 0 1-7.5 7.5A7.5 7.5 0 0 1 4 12.5c0-2.71 1.44-5.09 3.6-6.4l.73.73A6.48 6.48 0 0 0 5 12.5a6.5 6.5 0 0 0 6.5 6.5a6.5 6.5 0 0 0 6.5-6.5c0-2.44-1.34-4.56-3.33-5.67l.73-.73a7.48 7.48 0 0 1 3.6 6.4"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
