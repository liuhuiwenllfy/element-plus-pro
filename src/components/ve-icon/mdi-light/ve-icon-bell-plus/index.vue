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
          d="M11.5 3A1.5 1.5 0 0 0 10 4.5v.71C7.69 5.86 6 8 6 10.5V16l-3 3h17l-3-3v-5.5c0-2.5-1.69-4.64-4-5.29V4.5A1.5 1.5 0 0 0 11.5 3m0 1a.5.5 0 0 1 .5.5v1.53c2.25.25 4 2.15 4 4.47v5.91L17.59 18H5.41L7 16.41V10.5c0-2.32 1.75-4.22 4-4.47V4.5a.5.5 0 0 1 .5-.5m-.5 6v2H9v1h2v2h1v-2h2v-1h-2v-2zM9.05 20a2.5 2.5 0 0 0 4.9 0h-1.04a1.495 1.495 0 0 1-2.82 0z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
