<script lang="ts" setup>

defineProps({
  size: {
    type: String,
    required: false,
    default: () => '16'
  }
})

</script>

<template>
  <svg :height="size" :width="size" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 20v-8h4v8zm6 0V4h4v16zm6 0V9h4v11z" fill="currentColor"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
