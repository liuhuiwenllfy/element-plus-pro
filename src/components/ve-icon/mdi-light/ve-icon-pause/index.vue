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
    <path d="M13 19V6h4v13zm-7 0V6h4v13zM7 7v11h2V7zm7 0v11h2V7z" fill="currentColor"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
