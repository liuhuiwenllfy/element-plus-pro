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
    <!-- Icon from SVG Spinners by Utkarsh Verma - https://github.com/n3r4zzurr0/svg-spinners/blob/main/LICENSE -->
    <circle cx="4" cy="12" fill="currentColor" r="1.5">
      <animate attributeName="r" dur="0.75s" repeatCount="indefinite" values="1.5;3;1.5"/>
    </circle>
    <circle cx="12" cy="12" fill="currentColor" r="3">
      <animate attributeName="r" dur="0.75s" repeatCount="indefinite" values="3;1.5;3"/>
    </circle>
    <circle cx="20" cy="12" fill="currentColor" r="1.5">
      <animate attributeName="r" dur="0.75s" repeatCount="indefinite" values="1.5;3;1.5"/>
    </circle>
  </svg>
</template>

<style lang="scss" scoped>

</style>
