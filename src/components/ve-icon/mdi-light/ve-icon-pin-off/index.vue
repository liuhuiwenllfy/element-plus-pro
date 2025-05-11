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
          d="m2.79 4.46l.71-.71L20.25 20.5l-.71.71L14.33 16H12v4.5l-.5 1.5l-.5-1.5V16H6v-2l2-2V9.66zM14 12.41V5h1V4H8v1h1v2.84l-1-1V6h-.84L7 5.84V3h9v3h-1v6l2 2v1.83l-1-.99v-.43zm-5 0l-2 2V15h6.34L9 10.66z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
