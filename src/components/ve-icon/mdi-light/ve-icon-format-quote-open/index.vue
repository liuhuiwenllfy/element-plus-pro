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
        d="M5 18v-8l1.95-4h4.2L9.2 10H11v8zm1-7.77V17h4v-6H7.6l1.95-4H7.58zM12 18v-8l1.95-4h4.2l-1.95 4H18v8zm1-7.77V17h4v-6h-2.4l1.95-4h-1.97z"
        fill="currentColor"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
