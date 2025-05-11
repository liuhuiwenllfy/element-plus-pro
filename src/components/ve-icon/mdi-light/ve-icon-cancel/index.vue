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
          d="M11.5 22C6.26 22 2 17.75 2 12.5A9.5 9.5 0 0 1 11.5 3a9.5 9.5 0 0 1 9.5 9.5a9.5 9.5 0 0 1-9.5 9.5m0-1a8.5 8.5 0 0 0 8.5-8.5c0-2.17-.81-4.15-2.14-5.65l-12.01 12A8.47 8.47 0 0 0 11.5 21m0-17A8.5 8.5 0 0 0 3 12.5c0 2.17.81 4.14 2.15 5.64l12-12A8.5 8.5 0 0 0 11.5 4"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
