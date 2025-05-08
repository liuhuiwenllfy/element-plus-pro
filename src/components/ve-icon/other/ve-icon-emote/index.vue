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
          d="M512 64C262.4 64 64 262.4 64 512s198.4 448 448 448 448-198.4 448-448S761.6 64 512 64zM569.6 409.6c0-12.8 12.8-32 32-32l44.8 0c12.8 0 32 12.8 32 32l0 57.6c0 12.8-12.8 32-32 32L601.6 499.2c-12.8 0-32-12.8-32-32L569.6 409.6zM345.6 409.6c0-12.8 12.8-32 32-32l44.8 0c12.8 0 32 12.8 32 32l0 57.6c0 12.8-12.8 32-32 32L377.6 499.2c-12.8 0-32-12.8-32-32L345.6 409.6zM512 736c-96 0-192-64-224-147.2l64 0c38.4 64 89.6 89.6 160 89.6s121.6-25.6 160-89.6l64 0C716.8 659.2 608 736 512 736z"
    ></path>
  </svg>

</template>

<style lang="scss" scoped>

</style>
