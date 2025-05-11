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
          d="M15 6h5v6h-5zm-6 6V6h5v6zm6 7v-6h5v6zm-6 0v-6h5v6zm-6 0v-6h5v6zm0-7V6h5v6zm1-5v4h3V7zm6 0v4h3V7zm6 0v4h3V7zM4 14v4h3v-4zm6 0v4h3v-4zm6 0v4h3v-4z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
