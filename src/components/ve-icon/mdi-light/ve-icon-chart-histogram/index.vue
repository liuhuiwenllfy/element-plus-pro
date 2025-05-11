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
    <path :fill="color" d="M3 4h1v9h3V7h5v4h4v4h4v6H3zm13 12v4h3v-4zm-4-4v8h3v-8zM8 8v12h3V8zm-4 6v6h3v-6z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
