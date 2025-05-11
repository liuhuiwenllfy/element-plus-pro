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
          d="M12 4h8v6h-8zm0 17V11h8v10zm-9 0v-6h8v6zm0-7V4h8v10zm1-9v8h6V5zm9 0v4h6V5zm0 7v8h6v-8zm-9 4v4h6v-4z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
