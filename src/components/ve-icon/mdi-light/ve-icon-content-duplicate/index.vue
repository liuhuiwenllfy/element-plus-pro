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
          d="M9 6h8a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-1h1v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v5H6V9a3 3 0 0 1 3-3M5 2h10v1H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h7.25L10 13.75l.66-.75l3.5 3.5l-3.5 3.5l-.66-.75L12.25 17H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
