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
          d="m4.24 12.25l7.26 7.25v1.42l-7.96-7.96A5.25 5.25 0 0 1 2 9.25A5.25 5.25 0 0 1 7.25 4c1.75 0 3.3.85 4.25 2.17v.97h-.56A4.24 4.24 0 0 0 7.25 5A4.25 4.25 0 0 0 3 9.25c0 1.17.47 2.25 1.24 3"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
