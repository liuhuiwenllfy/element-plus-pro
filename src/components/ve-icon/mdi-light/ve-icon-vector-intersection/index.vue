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
          d="M4 2h1v1H4a2 2 0 0 0-2 2v1H1V5a3 3 0 0 1 3-3m5 0v1H7V2zm3 0a3 3 0 0 1 3 3v1h-1V5a2 2 0 0 0-2-2h-1V2zm3 6v5a3 3 0 0 1-3 3H7v-5a3 3 0 0 1 3-3zM2 10H1V8h1zm0 3a2 2 0 0 0 2 2h1v1H4a3 3 0 0 1-3-3v-1h1zm6 6a2 2 0 0 0 2 2h1v1h-1a3 3 0 0 1-3-3v-1h1zm10 2a2 2 0 0 0 2-2v-1h1v1a3 3 0 0 1-3 3h-1v-1zm2-10a2 2 0 0 0-2-2h-1V8h1a3 3 0 0 1 3 3v1h-1zm1 5h-1v-2h1zm-8 6v-1h2v1zm-1-7a2 2 0 0 0 2-2V9h-4a2 2 0 0 0-2 2v4z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
