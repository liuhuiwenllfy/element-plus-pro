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
    <path d="M7.598 12.5L18 6v13l-1-.625L7.598 12.5Zm1.887 0L17 17.196V7.804L9.485 12.5ZM5 6h1v13H5V6Z"
          fill="currentColor"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
