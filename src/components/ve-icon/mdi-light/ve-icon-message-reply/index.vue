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
        d="M20 20.59L16.41 17H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2zM20 22h1V6a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h11z"
        fill="currentColor"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
