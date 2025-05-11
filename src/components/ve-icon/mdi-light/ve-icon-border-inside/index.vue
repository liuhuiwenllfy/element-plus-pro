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
          d="M17 4v1h-2V4zm-4 16v1h-3v-1h1v-7H4v1H3v-3h1v1h7V5h-1V4h3v1h-1v7h7v-1h1v3h-1v-1h-7v7zm4 0v1h-2v-1zM4 21H3v-1h1zm2 0v-1h2v1zM4 9H3V7h1zm0 9H3v-2h1zM8 4v1H6V4zM4 5H3V4h1zm15 16v-1h1v1zm0-12V7h1v2zm0 9v-2h1v2zm0-13V4h1v1z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
