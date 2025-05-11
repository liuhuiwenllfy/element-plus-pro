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
          d="M11.5 6a7.5 7.5 0 0 1 7.5 7.5a7.5 7.5 0 0 1-7.5 7.5A7.5 7.5 0 0 1 4 13.5A7.5 7.5 0 0 1 11.5 6m0 1A6.5 6.5 0 0 0 5 13.5a6.5 6.5 0 0 0 6.5 6.5a6.5 6.5 0 0 0 6.5-6.5A6.5 6.5 0 0 0 11.5 7M11 9h1v4.36l3.05 1.42l-.42.91L11 14zm4.25-3.75l.64-.75l3.83 3.2l-.64.76zm-7.5 0L3.92 8.46l-.64-.76l3.83-3.2z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
