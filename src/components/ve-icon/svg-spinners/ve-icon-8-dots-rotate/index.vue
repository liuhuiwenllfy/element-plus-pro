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
    <!-- Icon from SVG Spinners by Utkarsh Verma - https://github.com/n3r4zzurr0/svg-spinners/blob/main/LICENSE -->
    <g>
      <circle cx="3" cy="12" r="2" :fill="color"/>
      <circle cx="21" cy="12" r="2" :fill="color"/>
      <circle cx="12" cy="21" r="2" :fill="color"/>
      <circle cx="12" cy="3" r="2" :fill="color"/>
      <circle cx="5.64" cy="5.64" r="2" :fill="color"/>
      <circle cx="18.36" cy="18.36" r="2" :fill="color"/>
      <circle cx="5.64" cy="18.36" r="2" :fill="color"/>
      <circle cx="18.36" cy="5.64" r="2" :fill="color"/>
      <animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate"
                        values="0 12 12;360 12 12"/>
    </g>
  </svg>
</template>

<style lang="scss" scoped>

</style>
