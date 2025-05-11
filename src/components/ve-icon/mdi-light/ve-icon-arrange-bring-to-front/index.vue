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
    <path :fill="color" d="M9 7V5H4v5h2v1H3V4h7v3zm4 14v-3h1v2h5v-5h-2v-1h3v7zM8 9h7v7H8zm1 1v5h5v-5z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
