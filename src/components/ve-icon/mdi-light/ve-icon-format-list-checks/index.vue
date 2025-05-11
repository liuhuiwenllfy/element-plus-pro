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
          d="M20 18v1H7v-1zm0-6v1H7v-1zm0-6v1H7V6zM2 5h3v3H2zm1 1v1h1V6zm-1 5h3v3H2zm1 1v1h1v-1zm-1 5h3v3H2zm1 1v1h1v-1z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
