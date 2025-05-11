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
    <path :fill="color" d="M5 5h8.42l1.16 2H19v9h-6l-1.15-2H6v7H5zm13 10V8h-4l-1.15-2H6v7h6.42l1.16 2z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
