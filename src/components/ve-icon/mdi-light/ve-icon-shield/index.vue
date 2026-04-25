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
    <path
        d="M11.5 3.11L19 6.63v5.01c0 4.81-3.22 9.26-7.5 10.4C7.22 20.9 4 16.45 4 11.64V6.63m7.5 16.44c4.9-1.23 8.5-6.13 8.5-11.43V6l-8.5-4L3 6v5.64c0 5.3 3.6 10.2 8.5 11.43"
        fill="currentColor"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
