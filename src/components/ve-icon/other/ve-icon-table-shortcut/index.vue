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
  <svg :height="size" :width="size" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 18v2h5.586L3 27.586L4.414 29L12 21.414V27h2v-9z" fill="currentColor"/>
    <path :fill="color"
          d="M27 3H5a2 2 0 0 0-2 2v10h2v-4h10v4h2v-4h10v7H17v2h10v7H17v2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 6H5V5h22Z"
    />
  </svg>
</template>

<style lang="scss" scoped>

</style>
