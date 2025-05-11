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
          d="m15.7 6.92l-6.89 4.02c.12.33.19.69.19 1.06s-.07.73-.19 1.06l6.89 4.02A2.996 2.996 0 0 1 21 19c0 1.66-1.34 3-3 3s-3-1.34-3-3c0-.37.07-.73.19-1.06L8.3 13.92A2.996 2.996 0 0 1 3 12a2.996 2.996 0 0 1 5.3-1.92l6.89-4.02C15.07 5.73 15 5.37 15 5c0-1.66 1.34-3 3-3s3 1.34 3 3a2.996 2.996 0 0 1-5.3 1.92M18 21c1.11 0 2-.89 2-2s-.89-2-2-2s-2 .9-2 2s.9 2 2 2M6 14c1.11 0 2-.89 2-2s-.89-2-2-2s-2 .9-2 2s.89 2 2 2m12-7c1.11 0 2-.89 2-2s-.89-2-2-2s-2 .9-2 2s.9 2 2 2"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
