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
          d="M11 3h1l4.85 4.85l-4.64 4.65l4.64 4.65L12 22h-1v-8.29l-4.45 4.45l-.71-.71l4.95-4.95l-4.95-4.95l.71-.71L11 11.29zm1 1.41v6.88l3.44-3.44zm0 16.18l3.44-3.44L12 13.71z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
