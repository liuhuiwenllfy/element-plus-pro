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
          d="M12.86 10.44L11 6.06l-1.86 4.39l-4.75.41L8 14l-1.08 4.63L11 16.17l4.09 2.46L14 14l3.61-3.14zm3.73 10.26L11 17.34L5.42 20.7l1.46-6.35l-4.92-4.28l6.49-.57l2.55-6l2.55 6l6.49.57l-4.92 4.27z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
