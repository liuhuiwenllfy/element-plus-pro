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
    <path :fill="color" d="M3 4h17v1H3zm9 9v-1h8v1zM3 7h7v7H3zm1 1v5h5V8zm-1 8h13v1H3zm0 4h17v1H3z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
