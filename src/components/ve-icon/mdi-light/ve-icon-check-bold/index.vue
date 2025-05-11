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
          d="m9 19l-5.657-5.657l2.121-2.121L9 14.757l8.485-8.485l2.122 2.121L9 19Zm-3.536-6.364l-.707.707L9 17.586l9.192-9.193l-.707-.707L9 16.172l-3.536-3.536Z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
