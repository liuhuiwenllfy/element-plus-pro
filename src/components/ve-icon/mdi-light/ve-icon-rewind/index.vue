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
    <path d="m1 12.5l9.4 5.88l1 .62v-5.62l8 5l1 .62V6l-9 5.62V6zm1.89 0l7.51-4.7v9.4zm9 0l7.51-4.7v9.4z"
          fill="currentColor"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
