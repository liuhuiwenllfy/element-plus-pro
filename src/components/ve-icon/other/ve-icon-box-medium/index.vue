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
    <path d="M26 28H6a2.002 2.002 0 0 1-2-2V9h2v17h20V9h2v17a2.002 2.002 0 0 1-2 2" :fill="color"/>
    <path
        :fill="color"
        d="m18 9l-1.515 5L16 15.977L15.535 14L14 9h-2v14h2v-8l-.158-1.996l.579 1.996L16 19.626L17.579 15l.58-2L18 15v8h2V9zM4 4h24v2H4z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
