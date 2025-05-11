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
          d="M8 13v-1h7v1zm7.5-6a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H13v-1h2.5c2.5 0 4.5-2 4.5-4.5S18 8 15.5 8H13V7zm-8 11A5.5 5.5 0 0 1 2 12.5A5.5 5.5 0 0 1 7.5 7H10v1H7.5C5 8 3 10 3 12.5S5 17 7.5 17H10v1z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
