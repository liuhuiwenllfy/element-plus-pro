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
          d="M9 6.5c0 .79-.26 1.5-.7 2.1L20 20.29V21h-.71l-7.79-7.79l-3.2 3.19c.44.6.7 1.31.7 2.1A3.5 3.5 0 0 1 5.5 22A3.5 3.5 0 0 1 2 18.5A3.5 3.5 0 0 1 5.5 15c.79 0 1.5.26 2.1.7l3.19-3.2L7.6 9.3c-.6.44-1.31.7-2.1.7A3.5 3.5 0 0 1 2 6.5A3.5 3.5 0 0 1 5.5 3A3.5 3.5 0 0 1 9 6.5m-1 0A2.5 2.5 0 0 0 5.5 4A2.5 2.5 0 0 0 3 6.5A2.5 2.5 0 0 0 5.5 9A2.5 2.5 0 0 0 8 6.5M19.29 4H20v.71l-7.15 7.14l-.7-.7zM5.5 16A2.5 2.5 0 0 0 3 18.5A2.5 2.5 0 0 0 5.5 21A2.5 2.5 0 0 0 8 18.5A2.5 2.5 0 0 0 5.5 16"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
