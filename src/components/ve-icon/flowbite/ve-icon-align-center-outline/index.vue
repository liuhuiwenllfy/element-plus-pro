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
    default: () => 'none'
  }
})

</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24">
    <!-- Icon from Flowbite Icons by Themesberg - https://github.com/themesberg/flowbite-icons/blob/main/LICENSE -->
    <path :fill="color" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M8 6h8M6 10h12M8 14h8M6 18h12"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
