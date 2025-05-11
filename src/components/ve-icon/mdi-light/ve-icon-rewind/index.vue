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
          d="m1 12.5l9.4 5.88l1 .62v-5.62l8 5l1 .62V6l-9 5.62V6zm1.89 0l7.51-4.7v9.4zm9 0l7.51-4.7v9.4z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
