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
          d="M20 5h-8v1h-1V5H3V4h17zM3 7h1v2H3zm16 4h1v3h-1v-1h-1v-1h1zm0-4h1v2h-1zm-8 5h1v1h-1zm9 8v1h-1v-1zm0-2h-1v-2h1zM8 20v1H6v-1zm9 0v1h-2v-1zm-4 0v1h-3v-1h1v-1h1v1zm-9-9v1h1v1H4v1H3v-3zm-1 5h1v2H3zm1 4v1H3v-1zm5-8v1H7v-1zm2-4h1v2h-1zm0 7h1v2h-1zm5-3v1h-2v-1z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
