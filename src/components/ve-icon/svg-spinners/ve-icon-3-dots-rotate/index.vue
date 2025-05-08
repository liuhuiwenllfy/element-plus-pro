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
    <circle cx="12" cy="12" r="3" :fill="color"/>
    <g>
      <circle cx="4" cy="12" r="3" :fill="color"/>
      <circle cx="20" cy="12" r="3" :fill="color"/>
      <animateTransform attributeName="transform" calcMode="spline" dur="1s" keySplines=".36,.6,.31,1;.36,.6,.31,1"
                        repeatCount="indefinite" type="rotate" values="0 12 12;180 12 12;360 12 12"/>
    </g>
  </svg>
</template>

<style lang="scss" scoped>

</style>
