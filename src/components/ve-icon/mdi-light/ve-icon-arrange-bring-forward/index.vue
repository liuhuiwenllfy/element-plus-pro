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
          d="M8 9h4v1H9.71l6.71 6.72l-.7.7L9 10.71V13H8zM3 4h12v9l-1-1V5H4v10h7l1 1H3zm17 5v12H8v-3h1v2h10V10h-2V9z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
