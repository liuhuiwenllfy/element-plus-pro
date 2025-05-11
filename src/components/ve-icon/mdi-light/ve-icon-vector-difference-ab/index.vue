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
          d="M18 8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-8a3 3 0 0 1-3-3v-4h5a2 2 0 0 0 2-2V8zM8 16v3a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-3v4a3 3 0 0 1-3 3zm3-14h1a3 3 0 0 1 3 3v1h-1V5a2 2 0 0 0-2-2h-1zM4 2h1v1H4a2 2 0 0 0-2 2v1H1V5a3 3 0 0 1 3-3m3 1V2h2v1zm-5 7H1V8h1zm0 3a2 2 0 0 0 2 2h1v1H4a3 3 0 0 1-3-3v-1h1z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
