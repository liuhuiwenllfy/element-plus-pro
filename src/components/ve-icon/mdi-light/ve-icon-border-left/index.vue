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
          d="M4 4v8h1v1H4v8H3V4zm2 17v-1h2v1zm4-16V4h3v1h-1v1h-1V5zM6 5V4h2v1zm5 8v-1h1v1zm8-9h1v1h-1zm-2 0v1h-2V4zm2 12h1v2h-1zm0-9h1v2h-1zm0 4h1v3h-1v-1h-1v-1h1zm-9 9h1v-1h1v1h1v1h-3zm5 1v-1h2v1zm4-1h1v1h-1zm-8-5h1v2h-1zm-4-2v-1h2v1zm7 0v-1h2v1zm-3-5h1v2h-1z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
