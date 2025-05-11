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
    <path :fill="color" d="M3 5V4h17v1zm0 4V8h17v1zm0 4v-1h17v1zm0 4v-1h17v1zm0 4v-1h17v1z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
