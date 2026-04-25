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
        d="m15.74 8.83l-.7.71L11.5 6L7.96 9.54l-.7-.71l4.24-4.24zm0 7.34l-4.24 4.24l-4.24-4.24l.7-.71L11.5 19l3.54-3.54z"
        fill="currentColor"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
