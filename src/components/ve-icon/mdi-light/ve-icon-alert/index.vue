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
    <path d="M1 21L11.5 2.81L22 21zm19.27-1L11.5 4.81L2.73 20zM11 14v-4h1v4zm0 2h1v2h-1z" fill="currentColor"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
