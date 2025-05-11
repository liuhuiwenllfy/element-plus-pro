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
          d="M8 6h7a3 3 0 0 1 3 3v7h-1V9a2 2 0 0 0-2-2H8zm0 13a3 3 0 0 1-3-3V7H1V6h4V2h1v14a2 2 0 0 0 2 2h13v1h-3v4h-1v-4z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
