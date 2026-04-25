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
    <path d="M8 3h8a3 3 0 0 1 3 3v15l-7-3l-7 3V6a3 3 0 0 1 3-3m0 1a2 2 0 0 0-2 2v13.5l6-2.56l6 2.56V6a2 2 0 0 0-2-2z"
          fill="currentColor"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
