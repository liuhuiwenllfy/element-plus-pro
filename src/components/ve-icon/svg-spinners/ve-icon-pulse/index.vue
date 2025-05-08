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
    <circle cx="12" cy="12" r="0" :fill="color">
      <animate attributeName="r" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" repeatCount="indefinite"
               values="0;11"/>
      <animate attributeName="opacity" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" repeatCount="indefinite"
               values="1;0"/>
    </circle>
  </svg>
</template>

<style lang="scss" scoped>

</style>
