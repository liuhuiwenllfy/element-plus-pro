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
          d="M3 13v-1h17v1zm8-9h1v4.25L14.25 6l.75.66l-3.5 3.5L8 6.66L8.75 6L11 8.25zm0 17v-4.25L8.75 19L8 18.34l3.5-3.5l3.5 3.5l-.75.66L12 16.75V21z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
