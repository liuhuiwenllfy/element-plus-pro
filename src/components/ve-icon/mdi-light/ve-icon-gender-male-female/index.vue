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
          d="M16 3v1h3.3L15 8.3C14 7.5 12.8 7 11.5 7C8.5 7 6 9.5 6 12.5c0 2.8 2.2 5.2 5 5.5v2H9v1h2v2h1v-2h2v-1h-2v-2c2.8-.3 5-2.6 5-5.5c0-1.3-.5-2.5-1.3-3.5L20 4.7V8h1V3zm-4.5 5c1 0 2 .4 2.8 1c.2.2.5.4.7.7c.6.8 1 1.8 1 2.8c0 2.5-2 4.5-4.5 4.5S7 15 7 12.5S9 8 11.5 8"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
