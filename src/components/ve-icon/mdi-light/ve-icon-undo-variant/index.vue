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
          d="M6 20v-1h1v1zm7-12a6 6 0 0 1 6 6a6 6 0 0 1-6 6H9v-1h4a5 5 0 0 0 5-5a5 5 0 0 0-5-5H5.91l3.04 3.04l-.71.7L4 8.5l4.24-4.24l.71.7L5.91 8z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
