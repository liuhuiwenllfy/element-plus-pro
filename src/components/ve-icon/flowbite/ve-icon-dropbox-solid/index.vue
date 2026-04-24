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
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24"><!-- Icon from Flowbite Icons by Themesberg - https://github.com/themesberg/flowbite-icons/blob/main/LICENSE --><g fill="currentColor"><path d="M12.013 6.175L7.006 9.369l5.007 3.194l-5.007 3.193L2 12.545l5.006-3.193L2 6.175l5.006-3.194zM6.981 17.806l5.006-3.193l5.006 3.193L11.987 21z"/><path d="m12.013 12.545l5.006-3.194l-5.006-3.176l4.98-3.194L22 6.175l-5.007 3.194L22 12.562l-5.007 3.194z"/></g></svg></template>

<style lang="scss" scoped>

</style>
