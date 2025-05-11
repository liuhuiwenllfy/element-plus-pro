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
          d="M17 11.5a5.5 5.5 0 0 1-5.5 5.5A5.5 5.5 0 0 1 6 11.5V4h1v7.5C7 14 9 16 11.5 16s4.5-2 4.5-4.5V4h1zM5 21v-1h13v1z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
