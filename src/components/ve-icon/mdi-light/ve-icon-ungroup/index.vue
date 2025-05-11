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
          d="M2 3h3v1h8V3h3v3h-1v4h3V9h3v3h-1v7h1v3h-3v-1h-7v1H8v-3h1v-3H5v1H2v-3h1V6H2zm16 9v-1h-3v3h1v3h-3v-1h-3v3h1v1h7v-1h1v-7zm-5-6V5H5v1H4v8h1v1h4v-3H8V9h3v1h3V6zm-2 6h-1v3h3v-1h1v-3h-3zM3 5h1V4H3zm11 0h1V4h-1zm-5 6h1v-1H9zm10 0h1v-1h-1zM9 21h1v-1H9zm10 0h1v-1h-1zM3 16h1v-1H3zm11 0h1v-1h-1z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
