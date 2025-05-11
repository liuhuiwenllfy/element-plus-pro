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
    <path :fill="color" d="M13 4v17h-3V4zm7 6v11h-3V10zM6 13v8H3v-8zm8-10H9v19h5zm7 6h-5v13h5zM7 12H2v10h5z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
