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
    <path
        :fill="color"
        d="m30 28.586l-4.688-4.688a8.028 8.028 0 1 0-1.415 1.414L28.586 30zM19 25a6 6 0 1 1 6-6a6.007 6.007 0 0 1-6 6M2 12h8v2H2zM2 2h16v2H2zm0 5h16v2H2z"
    />
  </svg>
</template>

<style lang="scss" scoped>

</style>
