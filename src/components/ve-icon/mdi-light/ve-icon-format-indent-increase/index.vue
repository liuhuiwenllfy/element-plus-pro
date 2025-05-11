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
          d="M3 21v-1h17v1zm8-4v-1h9v1zm0-4v-1h9v1zm0-4V8h9v1zM3 5V4h17v1zm5.5 7.5L3 18V7zm-1.41 0L4 9.41v6.18z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
