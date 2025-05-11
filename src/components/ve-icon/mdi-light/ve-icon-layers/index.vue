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
          d="m2.7 11l8.67-6.75l8.93 6.98L11.63 18zm16 .21L11.39 5.5L4.32 11l7.31 5.73zM11.63 21L2.7 14l.8-.6l8.11 6.35l7.89-6.16l.8.64z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
