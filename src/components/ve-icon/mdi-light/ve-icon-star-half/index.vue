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
          d="m11 6.06l-1.86 4.39l-4.75.41L8 14l-1.08 4.63L11 16.18v1.16L5.42 20.7l1.46-6.35l-4.92-4.28l6.49-.57l2.55-6z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
