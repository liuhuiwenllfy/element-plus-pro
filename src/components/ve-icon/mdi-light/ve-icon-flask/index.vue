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
          d="M13 6h1V5a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v1h1v2.07l-5.71 9.9c-.19.3-.29.65-.29 1.03a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2c0-.38-.1-.73-.29-1.03L13 8.07zM6 22a3 3 0 0 1-3-3c0-.6.18-1.16.5-1.63L9 7.81V7a1 1 0 0 1-1-1V5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1v.81l5.5 9.56c.32.47.5 1.03.5 1.63a3 3 0 0 1-3 3zm6.29-6.71l1.63-1.62L17 19H6l3.66-6.34zm0 1.42l-2.41-2.42L7.73 18h7.54l-1.56-2.71zM12 10a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
