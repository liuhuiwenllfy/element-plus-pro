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
    <circle cx="4" cy="12" fill="currentColor" r="0">
      <animate attributeName="r" begin="0;svgSpinners3DotsMove1.end" calcMode="spline" dur="0.5s" fill="freeze"
               keySplines=".36,.6,.31,1" values="0;3"/>
      <animate attributeName="cx" begin="svgSpinners3DotsMove7.end" calcMode="spline" dur="0.5s" fill="freeze"
               keySplines=".36,.6,.31,1" values="4;12"/>
      <animate attributeName="cx" begin="svgSpinners3DotsMove5.end" calcMode="spline" dur="0.5s" fill="freeze"
               keySplines=".36,.6,.31,1" values="12;20"/>
      <animate id="svgSpinners3DotsMove0" attributeName="r" begin="svgSpinners3DotsMove3.end" calcMode="spline"
               dur="0.5s" fill="freeze" keySplines=".36,.6,.31,1" values="3;0"/>
      <animate id="svgSpinners3DotsMove1" attributeName="cx" begin="svgSpinners3DotsMove0.end" dur="0.001s"
               fill="freeze" values="20;4"/>
    </circle>
    <circle cx="4" cy="12" fill="currentColor" r="3">
      <animate attributeName="cx" begin="0;svgSpinners3DotsMove1.end" calcMode="spline" dur="0.5s" fill="freeze"
               keySplines=".36,.6,.31,1" values="4;12"/>
      <animate attributeName="cx" begin="svgSpinners3DotsMove7.end" calcMode="spline" dur="0.5s" fill="freeze"
               keySplines=".36,.6,.31,1" values="12;20"/>
      <animate id="svgSpinners3DotsMove2" attributeName="r" begin="svgSpinners3DotsMove5.end" calcMode="spline"
               dur="0.5s" fill="freeze" keySplines=".36,.6,.31,1" values="3;0"/>
      <animate id="svgSpinners3DotsMove3" attributeName="cx" begin="svgSpinners3DotsMove2.end" dur="0.001s"
               fill="freeze" values="20;4"/>
      <animate attributeName="r" begin="svgSpinners3DotsMove3.end" calcMode="spline" dur="0.5s" fill="freeze"
               keySplines=".36,.6,.31,1" values="0;3"/>
    </circle>
    <circle cx="12" cy="12" fill="currentColor" r="3">
      <animate attributeName="cx" begin="0;svgSpinners3DotsMove1.end" calcMode="spline" dur="0.5s" fill="freeze"
               keySplines=".36,.6,.31,1" values="12;20"/>
      <animate id="svgSpinners3DotsMove4" attributeName="r" begin="svgSpinners3DotsMove7.end" calcMode="spline"
               dur="0.5s" fill="freeze" keySplines=".36,.6,.31,1" values="3;0"/>
      <animate id="svgSpinners3DotsMove5" attributeName="cx" begin="svgSpinners3DotsMove4.end" dur="0.001s"
               fill="freeze" values="20;4"/>
      <animate attributeName="r" begin="svgSpinners3DotsMove5.end" calcMode="spline" dur="0.5s" fill="freeze"
               keySplines=".36,.6,.31,1" values="0;3"/>
      <animate attributeName="cx" begin="svgSpinners3DotsMove3.end" calcMode="spline" dur="0.5s" fill="freeze"
               keySplines=".36,.6,.31,1" values="4;12"/>
    </circle>
    <circle cx="20" cy="12" fill="currentColor" r="3">
      <animate id="svgSpinners3DotsMove6" attributeName="r" begin="0;svgSpinners3DotsMove1.end" calcMode="spline"
               dur="0.5s" fill="freeze" keySplines=".36,.6,.31,1" values="3;0"/>
      <animate id="svgSpinners3DotsMove7" attributeName="cx" begin="svgSpinners3DotsMove6.end" dur="0.001s"
               fill="freeze" values="20;4"/>
      <animate attributeName="r" begin="svgSpinners3DotsMove7.end" calcMode="spline" dur="0.5s" fill="freeze"
               keySplines=".36,.6,.31,1" values="0;3"/>
      <animate attributeName="cx" begin="svgSpinners3DotsMove5.end" calcMode="spline" dur="0.5s" fill="freeze"
               keySplines=".36,.6,.31,1" values="4;12"/>
      <animate attributeName="cx" begin="svgSpinners3DotsMove3.end" calcMode="spline" dur="0.5s" fill="freeze"
               keySplines=".36,.6,.31,1" values="12;20"/>
    </circle>
  </svg>
</template>

<style lang="scss" scoped>

</style>
