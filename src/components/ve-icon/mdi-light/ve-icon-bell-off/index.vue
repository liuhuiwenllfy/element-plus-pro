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
          d="m2.79 4.46l.71-.71L20.25 20.5l-.71.71l-2.2-2.21H3l3-3v-5.5c0-.83.18-1.62.5-2.32zM12 4.5a.5.5 0 0 0-.5-.5a.5.5 0 0 0-.5.5v1.53c-1 .11-1.91.55-2.6 1.21l-.71-.71c.64-.61 1.43-1.07 2.31-1.32V4.5A1.5 1.5 0 0 1 11.5 3A1.5 1.5 0 0 1 13 4.5v.71c2.31.65 4 2.79 4 5.29v5.34l-1-1V10.5c0-2.32-1.75-4.22-4-4.47zm-5 6v5.91L5.41 18h10.93L7.28 8.94C7.1 9.43 7 9.95 7 10.5M11.5 22a2.5 2.5 0 0 1-2.45-2h1.04a1.495 1.495 0 0 0 2.82 0h1.04a2.5 2.5 0 0 1-2.45 2"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
