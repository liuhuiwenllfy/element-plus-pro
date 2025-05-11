<script lang="ts" setup>

defineProps({
  size: {
    type: String,
    required: false,
    default: () => '16'
  },
  color: {
    type: String,
    required: false,
    default: () => 'currentColor'
  }
})

</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24">
    <!-- Icon from Material Design Light by Pictogrammers - https://github.com/Templarian/MaterialDesignLight/blob/master/LICENSE.md -->
    <path :fill="color"
          d="M3 4h17v17H3zm1 1v7h1v1H4v7h7v-1h1v1h7v-7h-1v-1h1V5h-7v1h-1V5zm3 7h2v1H7zm4 0h1v1h-1zm0 3h1v2h-1zm3-3h2v1h-2zm-3-2V8h1v2z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
