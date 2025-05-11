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
          d="M3 16V9l5-5h7l5 5v7.03L15.03 21H8zM8.39 5L4 9.39v6.21L8.4 20h6.21L19 15.61V9.39L14.61 5z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
