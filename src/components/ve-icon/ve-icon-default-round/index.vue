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
  <svg :height="size" :width="size" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
    <path :fill="color"
          d="M198.4 883.2l166.4-236.8L512 755.2l217.6-320 204.8 307.2c32-64 51.2-134.4 51.2-211.2C985.6 268.8 774.4 57.6 512 57.6S38.4 268.8 38.4 531.2c0 140.8 64 268.8 160 352z m140.8-582.4c64 0 121.6 51.2 121.6 121.6s-51.2 115.2-121.6 115.2-115.2-51.2-115.2-121.6 51.2-115.2 115.2-115.2z"
    ></path>
  </svg>
</template>

<style lang="scss" scoped>

</style>
