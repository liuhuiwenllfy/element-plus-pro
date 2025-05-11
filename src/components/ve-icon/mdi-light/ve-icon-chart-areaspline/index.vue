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
          d="M3 4h1v14l5.57-9.67l6.01 3.47l3.62-6.26l.86.5l-4.11 7.13L9.94 9.7L4 20h2.3l3.87-6.71l.5-.86l.86.5l5.15 2.97L20 10.14V21H3zm14.04 13.26l-6.01-3.47L7.45 20H19v-6.12z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
