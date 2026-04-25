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
        d="M7 8v5h6V8zM2 3h3v1h13V3h3v3h-1v13h1v3h-3v-1H5v1H2v-3h1V6H2zm3 16v1h13v-1h1V6h-1V5H5v1H4v13zM6 7h8v4h3v7H8v-4H6zm8 7H9v3h7v-5h-2zM3 4v1h1V4zm16 0v1h1V4zm0 16v1h1v-1zM3 20v1h1v-1z"
        fill="currentColor"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
