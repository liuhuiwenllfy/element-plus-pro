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
    <path d="m5.33 15l6.17-9.25L17.67 15zM5 18h13v1H5zm2-3.97h9l-4.5-6.78z" fill="currentColor"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
