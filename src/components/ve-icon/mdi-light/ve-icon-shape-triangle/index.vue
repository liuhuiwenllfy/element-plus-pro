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
    <path d="M1 21L11.5 2.813L22 21H1Zm19.268-1L11.5 4.813L2.732 20h17.536Z" fill="currentColor"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
