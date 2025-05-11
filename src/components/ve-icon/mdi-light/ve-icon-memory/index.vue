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
          d="M8 19a3 3 0 0 1-3-3v-1H3v-1h2v-3H3v-1h2V9a3 3 0 0 1 3-3h1V4h1v2h3V4h1v2h1a3 3 0 0 1 3 3v1h2v1h-2v3h2v1h-2v1a3 3 0 0 1-3 3h-1v2h-1v-2h-3v2H9v-2zM8 7a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm1 8v-5h5v5zm1-4v3h3v-3z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
