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
    <path :fill="color" d="m16 3l-3.5 7H16l-6 12.03V14H7V3zm-5.11 8l3.49-7H8v9h3v4.79L14.38 11z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
