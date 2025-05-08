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
  <svg :height="size" :width="size" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
    <path :fill="color"
          d="M981.333333 512c0-260.266667-209.066667-469.333333-469.333333-469.333333S42.666667 251.733333 42.666667 512s209.066667 469.333333 469.333333 469.333333 469.333333-209.066667 469.333333-469.333333z m-64 0c0 221.866667-179.2 405.333333-405.333333 405.333333S106.666667 733.866667 106.666667 512 285.866667 106.666667 512 106.666667s405.333333 183.466667 405.333333 405.333333z"
    ></path>
    <path :fill="color"
          d="M512 473.6L345.6 640 298.666667 597.333333l213.333333-213.333333 213.333333 213.333333-46.933333 42.666667z"
    ></path>
  </svg>

</template>

<style lang="scss" scoped>

</style>
