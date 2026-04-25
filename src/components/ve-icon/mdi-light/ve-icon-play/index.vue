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
    <path d="M18.4 12.5L9 18.38L8 19V6zm-1.9 0L9 7.8v9.4z" fill="currentColor"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
