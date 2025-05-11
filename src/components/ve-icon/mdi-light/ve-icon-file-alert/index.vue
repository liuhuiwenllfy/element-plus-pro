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
          d="M7 3a3 3 0 0 0-3 3v13a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3v-9l-7-7zm0 1h4v4a3 3 0 0 0 3 3h4v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m5 .41L17.59 10H14a2 2 0 0 1-2-2zM7.5 10v5h1v-5zm0 7v2h1v-2z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
