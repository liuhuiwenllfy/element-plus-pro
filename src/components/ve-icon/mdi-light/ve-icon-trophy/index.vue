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
          d="M7 22a4 4 0 0 1 4-4v-1a5 5 0 0 1-4.9-4H5a3 3 0 0 1-3-3V5h2c.77 0 1.47.29 2 .76V3h11v2.76c.53-.47 1.23-.76 2-.76h2v5a3 3 0 0 1-3 3h-1.1a5 5 0 0 1-4.9 4v1a4 4 0 0 1 4 4zm5-3h-1c-1.31 0-2.42.83-2.83 2h6.66A2.99 2.99 0 0 0 12 19m4-15H7v8a4 4 0 0 0 4 4h1a4 4 0 0 0 4-4zm4 6V6h-1a2 2 0 0 0-2 2v4h1a2 2 0 0 0 2-2M3 10a2 2 0 0 0 2 2h1V8a2 2 0 0 0-2-2H3z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
