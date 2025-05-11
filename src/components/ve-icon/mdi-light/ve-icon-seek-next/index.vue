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
          d="M15.402 12.5L5 6v13l1-.625l9.402-5.875Zm-1.887 0L6 17.196V7.804l7.515 4.696ZM18 6h-1v13h1V6Z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
