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
          d="M17 20v-1h-1v1zM10 8a6 6 0 0 0-6 6a6 6 0 0 0 6 6h4v-1h-4a5 5 0 0 1-5-5a5 5 0 0 1 5-5h7.09l-3.04 3.04l.71.7L19 8.5l-4.24-4.24l-.71.7L17.09 8z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
