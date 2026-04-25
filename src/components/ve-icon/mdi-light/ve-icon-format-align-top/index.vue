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
    <path d="M3 4h17v1H3zm0 4h13v1H3zm8 13v-8.25L7.75 16L7 15.34l4.5-4.5l4.5 4.5l-.75.66L12 12.75V21z"
          fill="currentColor"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
