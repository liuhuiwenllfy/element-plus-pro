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
          d="M10.9 8.43L11 8a1 1 0 0 0-1-1H4.93l.92-3.44v-.02a.97.97 0 0 0-.26-.96l-4 4.01C1.22 6.95 1 7.45 1 8v4a2 2 0 0 0 2 2h4c.8 0 1.5-.47 1.81-1.14H8.8zM7 15H3a3 3 0 0 1-3-3V8c0-.83.34-1.58.88-2.12l4.71-4.72l.71.71c.53.53.7 1.29.51 1.97L6.23 6H10a2 2 0 0 1 2 2c0 .34-.08.66-.23.94l-2.01 4.23A3 3 0 0 1 7 15m5.1 1.57L12 17a1 1 0 0 0 1 1h5.07l-.92 3.44v.02c-.09.33-.01.7.26.96l4.01-4.01h-.01c.37-.36.59-.86.59-1.41v-4a2 2 0 0 0-2-2h-4c-.8 0-1.5.47-1.81 1.14h.01zM16 10h4a3 3 0 0 1 3 3v4c0 .83-.33 1.58-.88 2.12l-4.71 4.72l-.71-.71c-.53-.53-.7-1.29-.51-1.97l.58-2.16H13a2 2 0 0 1-2-2c0-.34.09-.66.23-.94l2.01-4.23A3 3 0 0 1 16 10"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
