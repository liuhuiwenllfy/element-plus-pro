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
  <svg :height="size" :width="size" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path
        :fill="color"
        d="M2 7.25A3.25 3.25 0 0 1 5.25 4h13.5A3.25 3.25 0 0 1 22 7.25v9.5A3.25 3.25 0 0 1 18.75 20H5.25A3.25 3.25 0 0 1 2 16.75zm18.5 0a1.75 1.75 0 0 0-1.75-1.75H9.5V9h11zm0 3.25h-11v8h9.25a1.75 1.75 0 0 0 1.75-1.75z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
