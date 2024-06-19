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
    default: () => ''
  }
})

</script>

<template>
  <svg :height="size" :width="size" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
    <path
        :fill="color"
        d="M7.5 0a3.499 3.499 0 1 0 0 6.996A3.499 3.499 0 1 0 7.5 0m-2 8.994a3.5 3.5 0 0 0-3.5 3.5v2.497h11v-2.497a3.5 3.5 0 0 0-3.5-3.5z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
