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
          d="M17 7v10.5a5.5 5.5 0 0 1-5.5 5.5A5.5 5.5 0 0 1 6 17.5V6a4 4 0 0 1 4-4a4 4 0 0 1 4 4v10.5a2.5 2.5 0 0 1-2.5 2.5A2.5 2.5 0 0 1 9 16.5V7h1v9.5a1.5 1.5 0 0 0 1.5 1.5a1.5 1.5 0 0 0 1.5-1.5V6a3 3 0 0 0-3-3a3 3 0 0 0-3 3v11.5C7 20 9 22 11.5 22s4.5-2 4.5-4.5V7z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
