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
          d="m15.17 16.74l-.71-.7L18 12.5l-3.54-3.54l.71-.7l4.24 4.24zm-7.34 0L3.59 12.5l4.24-4.24l.71.7L5 12.5l3.54 3.54z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
