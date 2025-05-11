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
          d="M8 4h9v1h-4L8.5 17h-1L12 5H8zM5 21v-1h8v1zm11.79-3.5L14 14.71l.71-.71l2.79 2.79L20.29 14l.71.71l-2.79 2.79L21 20.29l-.71.71l-2.79-2.79L14.71 21l-.71-.71z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
