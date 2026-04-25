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
    <circle cx="12" cy="12" fill="currentColor" r="3"/>
    <g>
      <circle cx="4" cy="12" fill="currentColor" r="3"/>
      <circle cx="20" cy="12" fill="currentColor" r="3"/>
      <animateTransform attributeName="transform" calcMode="spline" dur="1s" keySplines=".36,.6,.31,1;.36,.6,.31,1"
                        repeatCount="indefinite" type="rotate" values="0 12 12;180 12 12;360 12 12"/>
    </g>
  </svg>
</template>

<style lang="scss" scoped>

</style>
