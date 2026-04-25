<script lang="ts" setup>

defineProps({
  size: {
    type: String,
    required: false,
    default: () => '16'
  }
})

</script>

<template>
  <svg :height="size" :width="size" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <!-- Icon from Material Design Light by Pictogrammers - https://github.com/Templarian/MaterialDesignLight/blob/master/LICENSE.md -->
    <path d="m5.84 15.41l5.66-5.66l5.66 5.66l-.71.7l-4.95-4.95l-4.95 4.95z" fill="currentColor"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
