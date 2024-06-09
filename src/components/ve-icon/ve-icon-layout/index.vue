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
    default: () => ''
  }
})

</script>

<template>
  <svg :height="size" :width="size" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
    <path
        :fill="color"
        d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M40 56h176v40H40Zm176 144H112v-88h104z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
