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
          d="M2 9h4l4-4h2v15h-2l-4-4H2zm1 6h3.41l4 4H11V6h-.59l-4 4H3zm10.96.33l2.83-2.83l-2.83-2.83l.71-.71l2.83 2.83l2.83-2.83l.71.71l-2.83 2.83l2.83 2.83l-.71.71l-2.83-2.83l-2.83 2.83z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
