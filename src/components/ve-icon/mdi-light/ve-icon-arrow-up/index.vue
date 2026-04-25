<script lang="ts" setup>

defineProps({
  size: {
    type: String,
    required: false,
    default: () => '16'
  }
})

</script>

<template>
  <svg :height="size" :width="size" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <!-- Icon from Material Design Light by Pictogrammers - https://github.com/Templarian/MaterialDesignLight/blob/master/LICENSE.md -->
    <path d="M11 20V7.75L5.75 13L5 12.34l6.5-6.5l6.5 6.5l-.75.66L12 7.75V20z" fill="currentColor"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
