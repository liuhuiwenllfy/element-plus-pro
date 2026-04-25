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
        d="M15.74 5.29L11.5 9.54L7.26 5.29l.7-.7l3.54 3.53l3.54-3.53zm0 14.42l-.7.7l-3.54-3.53l-3.54 3.53l-.7-.7l4.24-4.25z"
        fill="currentColor"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
