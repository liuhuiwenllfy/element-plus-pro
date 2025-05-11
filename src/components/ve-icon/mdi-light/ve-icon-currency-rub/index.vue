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
          d="M7 21v-5H6v-1h1v-3H6v-1h1V4h7a4 4 0 0 1 4 4a4 4 0 0 1-4 4H8v3h6v1H8v5zm1-10h6a3 3 0 0 0 3-3a3 3 0 0 0-3-3H8z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
