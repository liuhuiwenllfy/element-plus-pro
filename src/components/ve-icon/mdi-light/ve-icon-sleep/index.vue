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
          d="M2 13h5v1l-3.74 5H7v1H2v-1l3.75-5H2zm7-4h5v1l-3.74 5H14v1H9v-1l3.75-5H9zm7-4h5v1l-3.74 5H21v1h-5v-1l3.75-5H16z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
