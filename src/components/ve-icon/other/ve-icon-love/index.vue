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
  <svg :height="size" :width="size" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
    <path :fill="color"
          d="M698.4 122c-67.5 0-134.9 25.9-186.4 77.8-51.5-51.9-118.9-77.8-186.4-77.8s-134.9 25.9-186.4 77.8c-102.9 103.7-102.9 271.8 0 375.6l289.9 292.1C452 890.5 482 902 512 902c30 0 60-11.5 82.8-34.6l289.9-292.1c102.9-103.7 102.9-271.8 0-375.6-51.4-51.8-118.8-77.7-186.3-77.7z"
    ></path>
  </svg>
</template>

<style lang="scss" scoped>

</style>
