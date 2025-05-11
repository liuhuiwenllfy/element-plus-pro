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
          d="m16.17 17.74l-.71-.7L20 12.5l-4.54-4.54l.71-.7l5.24 5.24zm-9.34 0L1.59 12.5l5.24-5.24l.71.7L3 12.5l4.54 4.54zM12.73 5h1l-3.46 15h-1z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
