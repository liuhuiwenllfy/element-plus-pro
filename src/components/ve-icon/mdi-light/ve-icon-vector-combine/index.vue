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
        d="M4 2h8a3 3 0 0 1 3 3v3h3a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-8a3 3 0 0 1-3-3v-3H4a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3m11 11a3 3 0 0 1-3 3H8v3a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-3zM4 3a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3v-4a3 3 0 0 1 3-3h4V5a2 2 0 0 0-2-2zm8 12a2 2 0 0 0 2-2V9h-4a2 2 0 0 0-2 2v4z"
        fill="currentColor"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
