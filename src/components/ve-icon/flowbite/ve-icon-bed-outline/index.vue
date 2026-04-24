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
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24"><!-- Icon from Flowbite Icons by Themesberg - https://github.com/themesberg/flowbite-icons/blob/main/LICENSE --><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 17v2M12 5.5V10m-6 7v2m15-2v-4a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v4zm-2-7V8a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2z"/></svg>
</template>

<style lang="scss" scoped>

</style>
