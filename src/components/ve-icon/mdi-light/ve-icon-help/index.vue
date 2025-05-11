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
          d="M11 22v-2h1v2zm0-4.5c0-4.5 5-6 5-9C16 6 14 4 11.5 4C9.18 4 7.28 5.75 7.03 8H6c.28-2.8 2.63-5 5.5-5A5.5 5.5 0 0 1 17 8.5c0 3.5-5 4.5-5 9v.5h-1z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
