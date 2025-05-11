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
          d="m17.16 7.59l-5.66 5.66l-5.66-5.66l.71-.7l4.95 4.95l4.95-4.95zm0 4l-5.66 5.66l-5.66-5.66l.71-.7l4.95 4.95l4.95-4.95z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
