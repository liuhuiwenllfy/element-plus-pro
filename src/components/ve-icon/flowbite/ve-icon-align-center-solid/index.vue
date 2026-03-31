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
    <path :fill="color" fill-rule="evenodd"
          d="M7 6c0-.6.4-1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1m-2 4c0-.6.4-1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1m2 4c0-.6.4-1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1m-2 4c0-.6.4-1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1"
          clip-rule="evenodd"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
