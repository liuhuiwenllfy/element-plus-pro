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
          d="M17 4v1h-2V4zm-4 16v1h-3v-1h1V5h-1V4h3v1h-1v15zm4 0v1h-2v-1zM4 21H3v-1h1zm2 0v-1h2v1zM4 9H3V7h1zm0 9H3v-2h1zm0-4H3v-3h1v1h1v1H4zM8 4v1H6V4zM4 5H3V4h1zm12 7v1h-2v-1zm-7 0v1H7v-1zm10 9v-1h1v1zm0-12V7h1v2zm0 9v-2h1v2zm0-4v-1h-1v-1h1v-1h1v3zm0-9V4h1v1z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
