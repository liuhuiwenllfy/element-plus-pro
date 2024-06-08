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
  <svg :height="size" :width="size" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path :fill="color" d="M9 4v3h5v12h3V7h5V4zm-6 8h3v7h3v-7h3V9H3z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
