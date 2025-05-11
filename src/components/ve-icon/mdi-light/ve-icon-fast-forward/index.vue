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
          d="M21.4 12.5L12 18.38L11 19v-5.62l-8 5L2 19V6l9 5.62V6zm-1.9 0L12 7.8v9.4zm-9 0L3 7.8v9.4z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
