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
        d="m18.71 16.74l-4.25-4.24l4.25-4.24l.7.7l-3.53 3.54l3.53 3.54zm-14.42 0l-.7-.7l3.53-3.54l-3.53-3.54l.7-.7l4.25 4.24z"
        fill="currentColor"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
