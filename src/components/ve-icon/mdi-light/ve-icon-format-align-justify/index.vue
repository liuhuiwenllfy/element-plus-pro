<script lang="ts" setup>

defineProps({
  size: {
    type: String,
    required: false,
    default: () => '16'
  }
})

</script>

<template>
  <svg :height="size" :width="size" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <!-- Icon from Material Design Light by Pictogrammers - https://github.com/Templarian/MaterialDesignLight/blob/master/LICENSE.md -->
    <path d="M3 5V4h17v1zm0 4V8h17v1zm0 4v-1h17v1zm0 4v-1h17v1zm0 4v-1h17v1z" fill="currentColor"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
