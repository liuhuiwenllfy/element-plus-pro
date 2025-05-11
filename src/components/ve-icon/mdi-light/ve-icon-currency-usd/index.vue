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
          d="M11 4h1v2c3.29.15 4 1.7 4 3h-1c0-1.33-1.18-2-3.5-2c-.82 0-3.5.16-3.5 2.25c0 .87 0 1.86 3.62 2.75l1.61.5c2.53.93 2.77 2.07 2.77 3.25c0 1.88-1.5 3.09-4 3.25v2h-1v-2c-3.29-.15-4-1.7-4-3h1c0 1.33 1.18 2 3.5 2c.82 0 3.5-.16 3.5-2.25c0-.87 0-1.86-3.62-2.75l-1.61-.5C7.24 11.57 7 10.43 7 9.25C7 7.37 8.5 6.16 11 6z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
