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
          d="M4 4h1v2h2V4h9v2h2V4h1v17h-1v-2h-2v2H7v-2H5v2H4V4Zm3 3H5v3h2V7Zm0 4H5v3h2v-3Zm0 4H5v3h2v-3Zm9 3h2v-3h-2v3Zm0-4h2v-3h-2v3Zm0-4h2V7h-2v3ZM8 5v7h7V5H8Zm0 8v7h7v-7H8Z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
