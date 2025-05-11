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
          d="M3 21v-1h13v1zm0-4v-1h17v1zm8-13h1v8.25L15.25 9l.75.66l-4.5 4.5L7 9.66L7.75 9L11 12.25z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
