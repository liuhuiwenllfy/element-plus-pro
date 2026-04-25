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
    <path
        d="M15 6h5v6h-5zm-6 6V6h5v6zm6 7v-6h5v6zm-6 0v-6h5v6zm-6 0v-6h5v6zm0-7V6h5v6zm1-5v4h3V7zm6 0v4h3V7zm6 0v4h3V7zM4 14v4h3v-4zm6 0v4h3v-4zm6 0v4h3v-4z"
        fill="currentColor"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
