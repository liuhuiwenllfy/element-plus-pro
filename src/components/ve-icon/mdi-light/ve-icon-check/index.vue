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
    <path d="M18.9 8.1L9 18l-4.95-4.95l.71-.71L9 16.59l9.19-9.2z" fill="currentColor"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
