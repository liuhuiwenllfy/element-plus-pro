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
  <svg :height="size" :width="size" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path
        :fill="color"
        d="M2 10a8 8 0 0 0 7.009 7.94q.013-.142.05-.287l.374-1.498c.105-.42.293-.812.553-1.155a5 5 0 0 1-3.875-1.856a.5.5 0 1 1 .778-.63a4.01 4.01 0 0 0 4.206 1.334l4.008-4.007a2.87 2.87 0 0 1 2.849-.722A8.001 8.001 0 0 0 2 10m9.5-1.5a1 1 0 1 1 2 0a1 1 0 0 1-2 0m-5 0a1 1 0 1 1 2 0a1 1 0 0 1-2 0m4.48 6.877l4.83-4.83a1.87 1.87 0 1 1 2.644 2.646l-4.83 4.829a2.2 2.2 0 0 1-1.02.578l-1.498.374a.89.89 0 0 1-1.079-1.078l.375-1.498a2.2 2.2 0 0 1 .578-1.02"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
