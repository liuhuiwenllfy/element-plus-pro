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
          d="M4 2h8a3 3 0 0 1 3 3v4h-5a2 2 0 0 0-2 2v5H4a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3m10 6V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3v-4a3 3 0 0 1 3-3zm4 0a3 3 0 0 1 3 3v1h-1v-1a2 2 0 0 0-2-2h-1V8zm3 8h-1v-2h1zm0 3a3 3 0 0 1-3 3h-1v-1h1a2 2 0 0 0 2-2v-1h1zm-8 3v-1h2v1zm-3 0a3 3 0 0 1-3-3v-1h1v1a2 2 0 0 0 2 2h1v1z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
