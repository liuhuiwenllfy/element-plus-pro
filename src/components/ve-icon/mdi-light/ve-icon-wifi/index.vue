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
          d="m11.5 20.5l-4.5-6c1.24-.94 2.81-1.5 4.5-1.5s3.26.56 4.5 1.5zm0-1.66l3.07-4.07a6.5 6.5 0 0 0-6.14 0zM11.5 4c3.73 0 7.17 1.24 9.93 3.32l-.6.8C18.23 6.16 15 5 11.5 5S4.77 6.16 2.17 8.12l-.6-.8C4.33 5.24 7.77 4 11.5 4m0 6c2.37 0 4.56.79 6.32 2.11l-.6.8A9.46 9.46 0 0 0 11.5 11c-2.15 0-4.13.71-5.72 1.91l-.6-.8C6.94 10.79 9.13 10 11.5 10m0-3c3.05 0 5.86 1 8.12 2.72l-.62.78A12.45 12.45 0 0 0 11.5 8c-2.82 0-5.43.94-7.5 2.5l-.62-.78C5.64 8 8.45 7 11.5 7"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
