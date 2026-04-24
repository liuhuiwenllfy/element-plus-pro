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
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24"><!-- Icon from Flowbite Icons by Themesberg - https://github.com/themesberg/flowbite-icons/blob/main/LICENSE --><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17 21l-5-4l-5 4V3.889a.92.92 0 0 1 .244-.629a.8.8 0 0 1 .59-.26h8.333a.8.8 0 0 1 .589.26a.92.92 0 0 1 .244.63z"/></svg>
</template>

<style lang="scss" scoped>

</style>
