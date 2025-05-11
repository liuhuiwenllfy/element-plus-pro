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
          d="M12 4v8h8V6a2 2 0 0 0-2-2zm8 9h-8v8h6a2 2 0 0 0 2-2zm-9 8v-8H3v6a2 2 0 0 0 2 2zm-8-9h8V4H5a2 2 0 0 0-2 2zm2-9h13a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
