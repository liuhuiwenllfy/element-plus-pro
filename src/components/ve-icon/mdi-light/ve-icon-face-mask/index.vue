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
          d="M19.5 6A2.5 2.5 0 0 0 17 8.5v.18l-4.91-1.59a1.96 1.96 0 0 0-1.18 0L6 8.68V8.5a2.5 2.5 0 0 0-5 0V13c0 1.1.9 2 2 2h2.5c1 2.35 3.3 4 6 4s5-1.65 6-4H20c1.1 0 2-.9 2-2V8.5A2.5 2.5 0 0 0 19.5 6M5 14H3c-.55 0-1-.45-1-1V8.5C2 7.67 2.67 7 3.5 7S5 7.67 5 8.5zm6.5 4A5.51 5.51 0 0 1 6 12.5V9.73l5.21-1.68C11.3 8 11.4 8 11.5 8s.2 0 .28.04L17 9.73v2.77c0 3.03-2.47 5.5-5.5 5.5m9.5-5c0 .55-.45 1-1 1h-2V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5zm-8.77-2.89l1.77.57v1.05l-2.06-.66a1.9 1.9 0 0 0-.88 0L9 11.73v-1.05l1.76-.57c.49-.15.99-.15 1.47 0"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
