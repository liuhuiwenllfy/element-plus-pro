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
          d="M9 3h5v5h-2v4h5a3 3 0 0 1 3 3v2h2v5h-5v-5h2v-2a2 2 0 0 0-2-2h-5v4h2v5H9v-5h2v-4H6a2 2 0 0 0-2 2v2h2v5H1v-5h2v-2a3 3 0 0 1 3-3h5V8H9zm4 4V4h-3v3zM5 21v-3H2v3zm8 0v-3h-3v3zm8 0v-3h-3v3z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
