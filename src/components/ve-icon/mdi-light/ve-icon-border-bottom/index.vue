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
          d="M3 20h8v-1h1v1h8v1H3zm17-2h-1v-2h1zM4 14H3v-3h1v1h1v1H4zm0 4H3v-2h1zm8-5h-1v-1h1zM3 5V4h1v1zm0 2h1v2H3zm12-2V4h2v1zM6 5V4h2v1zm4 0V4h3v1h-1v1h-1V5zm9 9v-1h-1v-1h1v-1h1v3zm1-5h-1V7h1zm-1-4V4h1v1zm-5 8v-1h2v1zm-2 4h-1v-2h1zm0-7h-1V8h1zm-5 3v-1h2v1z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
