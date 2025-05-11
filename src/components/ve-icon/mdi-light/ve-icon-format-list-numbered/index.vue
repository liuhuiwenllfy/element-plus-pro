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
          d="M2 11v-1h3v.9L3.2 13H5v1H2v-.9L3.8 11zm1-3V5H2V4h2v4zm-1 9v-1h3v4H2v-1h2v-.5H3v-1h1V17zM20 6v1H7V6zm0 6v1H7v-1zm0 6v1H7v-1z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
