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
          d="M21 6v1H10V6zm0 6v1H10v-1zm0 6v1H10v-1zM5 19.25L7.25 17l.75.66l-3.5 3.5l-3.5-3.5l.75-.66L4 19.25V5.75L1.75 8L1 7.34l3.5-3.5L8 7.34L7.25 8L5 5.75z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
