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
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24">
    <!-- Icon from Material Design Light by Pictogrammers - https://github.com/Templarian/MaterialDesignLight/blob/master/LICENSE.md -->
    <path :fill="color"
          d="M6 5h13a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-4.5l.5 3h1v1H9v-1h1l.5-3H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3m5.5 13l-.5 3h3l-.5-3zM6 6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM1 8a5 5 0 0 1 5-5h12v1H6a4 4 0 0 0-4 4v6H1z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
