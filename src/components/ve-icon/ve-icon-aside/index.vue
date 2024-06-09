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
    <path :fill="color"
          d="m14 20l6-6V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2zM6 6h12v6h-4a2 2 0 0 0-2 2v4H6zm10 4H8V8h8z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
