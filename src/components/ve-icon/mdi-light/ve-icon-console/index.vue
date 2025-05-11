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
          d="M5 4h13a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3m0 1a2 2 0 0 0-2 2h17a2 2 0 0 0-2-2zM3 18a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V8H3zm14 0h-5v-1h5zM6 10.5l.71-.71l4.2 4.21l-4.2 4.21L6 17.5L9.5 14z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
