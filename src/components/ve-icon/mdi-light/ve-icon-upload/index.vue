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
  <svg :height="size" :width="size" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <!-- Icon from Material Design Light by Pictogrammers - https://github.com/Templarian/MaterialDesignLight/blob/master/LICENSE.md -->
    <path d="M12 18.16V5.91l5.25 5.25l.75-.66L11.5 4L5 10.5l.75.66L11 5.91v12.25zM3 19h1v2h15v-2h1v3H3z"
          fill="currentColor"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
