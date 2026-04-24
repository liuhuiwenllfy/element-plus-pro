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
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24"><!-- Icon from Flowbite Icons by Themesberg - https://github.com/themesberg/flowbite-icons/blob/main/LICENSE --><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 19v-9c-1.5 0-2-1.5-2-2.5s.5-2 2-2.5c2.364-.643 4.2-.976 6-.989c1.8.013 3.636.346 6 .989c1.5.5 2 1.5 2 2.5s-.5 2.5-2 2.5v9a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1"/></svg>
</template>

<style lang="scss" scoped>

</style>
