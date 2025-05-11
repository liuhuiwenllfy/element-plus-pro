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
          d="M6 5h11a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3M4 17a2 2 0 0 0 2 2h5v-3H4zm7-5H4v3h7zm6 7a2 2 0 0 0 2-2v-1h-7v3zm2-7h-7v3h7zM4 11h7V8H4zm8 0h7V8h-7z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
