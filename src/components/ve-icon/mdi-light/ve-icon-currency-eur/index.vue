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
          d="m2 11l.5-1h2.87c1.07-3.47 4.31-6 8.13-6c2.13 0 4.08.78 5.57 2.08l-.4.99A7.5 7.5 0 0 0 6.43 10H17.5l-.4 1H6.15a7.6 7.6 0 0 0 0 3h9.75l-.4 1H6.43c1.03 2.91 3.8 5 7.07 5c2.17 0 4.13-.92 5.5-2.4V19c-1.5 1.24-3.4 2-5.5 2c-3.82 0-7.06-2.53-8.13-6H2l.5-1h2.63c-.08-.5-.13-1-.13-1.5s.05-1 .13-1.5z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
