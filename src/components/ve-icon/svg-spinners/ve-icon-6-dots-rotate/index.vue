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
      <circle cx="12" cy="2.5" fill="currentColor" opacity=".14" r="1.5"/>
      <circle cx="16.75" cy="3.77" fill="currentColor" opacity=".29" r="1.5"/>
      <circle cx="20.23" cy="7.25" fill="currentColor" opacity=".43" r="1.5"/>
      <circle cx="21.5" cy="12" fill="currentColor" opacity=".57" r="1.5"/>
      <circle cx="20.23" cy="16.75" fill="currentColor" opacity=".71" r="1.5"/>
      <circle cx="16.75" cy="20.23" fill="currentColor" opacity=".86" r="1.5"/>
      <circle cx="12" cy="21.5" fill="currentColor" r="1.5"/>
      <animateTransform attributeName="transform" calcMode="discrete" dur="0.75s" repeatCount="indefinite" type="rotate"
                        values="0 12 12;30 12 12;60 12 12;90 12 12;120 12 12;150 12 12;180 12 12;210 12 12;240 12 12;270 12 12;300 12 12;330 12 12;360 12 12"/>
    </g>
  </svg>
</template>

<style lang="scss" scoped>

</style>
