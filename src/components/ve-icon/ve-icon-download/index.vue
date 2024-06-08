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
          d="M864 832h-704a32 32 0 0 0 0 64h704a32 32 0 0 0 0-64zM801.28 400.64H640V161.92A33.92 33.92 0 0 0 606.08 128h-192a33.92 33.92 0 0 0-30.08 33.92v238.72H222.72a30.08 30.08 0 0 0-21.76 51.84l289.28 289.92a32 32 0 0 0 43.52 0l289.28-289.92a30.08 30.08 0 0 0-21.76-51.84z"
    ></path>
  </svg>
</template>

<style lang="scss" scoped>

</style>
