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
          d="M4 13v8h7v-8zm8 0v8h7v-8zm8 0v9H3v-9H2V7h3.04L5 6.5A3.5 3.5 0 0 1 8.5 3c1.27 0 2.39.68 3 1.7c.61-1.02 1.73-1.7 3-1.7A3.5 3.5 0 0 1 18 6.5l-.04.5H21v6zM3 8v4h8V8zm17 4V8h-8v4zm-3.05-5l.05-.5A2.5 2.5 0 0 0 14.5 4A2.5 2.5 0 0 0 12 6.5V7zM11 7v-.5A2.5 2.5 0 0 0 8.5 4A2.5 2.5 0 0 0 6 6.5l.05.5z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
