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
  <svg :height="size" :width="size" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <g :fill="color" stroke="currentColor" stroke-linecap="round" stroke-width="4">
      <path d="M40 33v9a2 2 0 0 1-2 2h-6.5M40 16V6a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h6"
            stroke-linejoin="round"/>
      <path d="M16 16h14m-7 28l17-21m-24 1h8"/>
    </g>
  </svg>
</template>

<style lang="scss" scoped>

</style>
