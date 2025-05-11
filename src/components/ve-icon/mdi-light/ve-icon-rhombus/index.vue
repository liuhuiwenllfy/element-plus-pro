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
    <path :fill="color" d="m2.59 12.5l8.91-8.91l8.91 8.91l-8.91 8.91zM11.5 5L4 12.5l7.5 7.5l7.5-7.5z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
