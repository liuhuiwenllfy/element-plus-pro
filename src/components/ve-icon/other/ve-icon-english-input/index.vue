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
        d="M14 10h2v.757a4.5 4.5 0 0 1 7 3.743V20h-2v-5.5c0-1.43-1.174-2.5-2.5-2.5S16 13.07 16 14.5V20h-2zm-2-6v2H4v5h8v2H4v5h8v2H2V4z"
    />
  </svg>
</template>

<style lang="scss" scoped>

</style>
