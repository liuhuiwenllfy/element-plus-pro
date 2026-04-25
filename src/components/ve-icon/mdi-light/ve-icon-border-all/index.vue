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
    <path d="M3 4h17v17H3zm1 1v7h7V5zm15 7V5h-7v7zM4 20h7v-7H4zm15 0v-7h-7v7z" fill="currentColor"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
