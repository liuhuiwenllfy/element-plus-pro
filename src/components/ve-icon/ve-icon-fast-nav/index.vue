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
  <svg :height="size" :width="size" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path
        :fill="color"
        d="M256 48A208.23 208.23 0 0 0 48 256c0 114.68 93.31 208 208 208a208.23 208.23 0 0 0 208-208c0-114.69-93.31-208-208-208m-8 361V264H103l259-114.11Z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
