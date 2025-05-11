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
          d="M12 3h1a8 8 0 0 1 8 8v1h-9zm1 8h7a7 7 0 0 0-7-7zm-3 3h8a8 8 0 0 1-8 8a8 8 0 0 1-8-8a8 8 0 0 1 8-8zm-1 1V7.07c-3.39.49-6 3.4-6 6.93a7 7 0 0 0 7 7c3.53 0 6.44-2.61 6.93-6z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
