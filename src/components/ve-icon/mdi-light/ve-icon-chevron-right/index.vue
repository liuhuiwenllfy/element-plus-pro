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
    <path d="m8.59 18.16l5.66-5.66l-5.66-5.66l-.7.71l4.95 4.95l-4.95 4.95z" fill="currentColor"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
