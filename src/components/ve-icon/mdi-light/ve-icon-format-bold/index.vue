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
          d="M16 14.5a3.5 3.5 0 0 1-3.5 3.5H7V5h4.5A3.5 3.5 0 0 1 15 8.5c0 1.1-.5 2.07-1.29 2.71C15.05 11.71 16 13 16 14.5M11.5 6H8v5h3.5A2.5 2.5 0 0 0 14 8.5A2.5 2.5 0 0 0 11.5 6m1 6H8v5h4.5a2.5 2.5 0 0 0 2.5-2.5a2.5 2.5 0 0 0-2.5-2.5"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
