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
    <circle cx="12" cy="12" fill="currentColor" r="0">
      <animate id="svgSpinnersPulse30" attributeName="r" begin="0;svgSpinnersPulse32.begin+0.4s" calcMode="spline"
               dur="1.2s" fill="freeze" keySplines=".52,.6,.25,.99" values="0;11"/>
      <animate attributeName="opacity" begin="0;svgSpinnersPulse32.begin+0.4s" calcMode="spline" dur="1.2s"
               fill="freeze" keySplines=".52,.6,.25,.99" values="1;0"/>
    </circle>
    <circle cx="12" cy="12" fill="currentColor" r="0">
      <animate id="svgSpinnersPulse31" attributeName="r" begin="svgSpinnersPulse30.begin+0.4s" calcMode="spline"
               dur="1.2s" fill="freeze" keySplines=".52,.6,.25,.99" values="0;11"/>
      <animate attributeName="opacity" begin="svgSpinnersPulse30.begin+0.4s" calcMode="spline" dur="1.2s" fill="freeze"
               keySplines=".52,.6,.25,.99" values="1;0"/>
    </circle>
    <circle cx="12" cy="12" fill="currentColor" r="0">
      <animate id="svgSpinnersPulse32" attributeName="r" begin="svgSpinnersPulse30.begin+0.8s" calcMode="spline"
               dur="1.2s" fill="freeze" keySplines=".52,.6,.25,.99" values="0;11"/>
      <animate attributeName="opacity" begin="svgSpinnersPulse30.begin+0.8s" calcMode="spline" dur="1.2s" fill="freeze"
               keySplines=".52,.6,.25,.99" values="1;0"/>
    </circle>
  </svg>
</template>

<style lang="scss" scoped>

</style>
