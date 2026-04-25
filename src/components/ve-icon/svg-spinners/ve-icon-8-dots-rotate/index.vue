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
    <g>
      <circle cx="3" cy="12" fill="currentColor" r="2"/>
      <circle cx="21" cy="12" fill="currentColor" r="2"/>
      <circle cx="12" cy="21" fill="currentColor" r="2"/>
      <circle cx="12" cy="3" fill="currentColor" r="2"/>
      <circle cx="5.64" cy="5.64" fill="currentColor" r="2"/>
      <circle cx="18.36" cy="18.36" fill="currentColor" r="2"/>
      <circle cx="5.64" cy="18.36" fill="currentColor" r="2"/>
      <circle cx="18.36" cy="5.64" fill="currentColor" r="2"/>
      <animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate"
                        values="0 12 12;360 12 12"/>
    </g>
  </svg>
</template>

<style lang="scss" scoped>

</style>
