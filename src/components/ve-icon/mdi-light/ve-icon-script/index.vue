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
          d="M3 19a2 2 0 0 0 2 2h6.76c-.47-.53-.76-1.23-.76-2zm11 2a2 2 0 0 0 2-2V6c0-.77.29-1.47.76-2H8a2 2 0 0 0-2 2v12h6v1a2 2 0 0 0 2 2M5 6a3 3 0 0 1 3-3h11a3 3 0 0 1 3 3v2h-5v11a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-1h3zm16 1V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
