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
          d="M11.5 4A8.5 8.5 0 0 0 3 12.5a8.5 8.5 0 0 0 8.5 8.5a8.5 8.5 0 0 0 8.5-8.5A8.5 8.5 0 0 0 11.5 4m0-1a9.5 9.5 0 0 1 9.5 9.5a9.5 9.5 0 0 1-9.5 9.5A9.5 9.5 0 0 1 2 12.5A9.5 9.5 0 0 1 11.5 3M11 17h1v2h-1zm.5-11A3.5 3.5 0 0 1 15 9.5c0 .9-.7 1.5-1.44 2.18l-.93.9c-.59.67-.66 1.95-.63 2.39V15h-1c0-.05-.1-1.96.87-3.08l1.03-.99c.6-.53 1.1-.98 1.1-1.43A2.5 2.5 0 0 0 11.5 7A2.5 2.5 0 0 0 9 9.5H8A3.5 3.5 0 0 1 11.5 6"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
