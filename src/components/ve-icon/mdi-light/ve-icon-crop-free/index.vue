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
          d="M6 4h2v1H6a2 2 0 0 0-2 2v2H3V7a3 3 0 0 1 3-3M4 18a2 2 0 0 0 2 2h2v1H6a3 3 0 0 1-3-3v-2h1zM17 4a3 3 0 0 1 3 3v2h-1V7a2 2 0 0 0-2-2h-2V4zm3 14a3 3 0 0 1-3 3h-2v-1h2a2 2 0 0 0 2-2v-2h1z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
