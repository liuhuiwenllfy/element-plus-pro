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
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24"><!-- Icon from Flowbite Icons by Themesberg - https://github.com/themesberg/flowbite-icons/blob/main/LICENSE --><g fill="none" stroke="currentColor" stroke-linecap="round"><path stroke-width="2" d="M2.992 4.983v13.934m6.97-13.934v13.934m5.976-13.934v13.934m2.987-13.934v13.934"/><path d="M5.48 4.483v14.934M7.47 4.483v14.934M21.413 4.483v14.934M13.446 4.483v14.934"/></g></svg>
</template>

<style lang="scss" scoped>

</style>
