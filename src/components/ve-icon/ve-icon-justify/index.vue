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
    <path :fill="color" d="M11 22V2h2v20zm4-5V7h3v10zm-9 0V7h3v10z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
