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
          d="M19 21v-8h-1v-1h1V4h1v17zM17 4v1h-2V4zm-4 16v1h-3v-1h1v-1h1v1zm4 0v1h-2v-1zm-5-8v1h-1v-1zm-8 9H3v-1h1zm2 0v-1h2v1zM4 9H3V7h1zm0 9H3v-2h1zm0-4H3v-3h1v1h1v1H4zm9-9h-1v1h-1V5h-1V4h3zM8 4v1H6V4zM4 5H3V4h1zm8 5h-1V8h1zm4 2v1h-2v-1zm-7 0v1H7v-1zm3 5h-1v-2h1z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
