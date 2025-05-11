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
    <path :fill="color" d="M2 4h1v16h2V10h4v10h2V6h4v14h2v-6h4v7H2zm16 11v5h2v-5zm-6-8v13h2V7zm-6 4v9h2v-9z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
