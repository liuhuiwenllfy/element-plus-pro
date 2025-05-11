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
          d="M13 5h6v6h-1V6.71L4.71 20L4 19.29L17.29 6H13zm0 14h4.29l-4.58-4.59l.7-.7L18 18.29V14h1v6h-6zM4 5.71L4.71 5l5.58 5.59l-.7.7z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
