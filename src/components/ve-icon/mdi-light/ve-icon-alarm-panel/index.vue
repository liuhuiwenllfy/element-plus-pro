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
          d="M8 11v2H5v-2zm5 0h-3v2h3zm5 0h-3v2h3zm-1-4H6v2h11zm1-1v4H5V6zm1-1H4c-.55 0-1 .45-1 1v13c0 .55.45 1 1 1h15c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1m0-1c1.1 0 2 .9 2 2v13c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM8 14H5v2h3zm5 0h-3v2h3zm5 0h-3v2h3zM8 17H5v2h3zm5 0h-3v2h3zm5 0h-3v2h3z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
