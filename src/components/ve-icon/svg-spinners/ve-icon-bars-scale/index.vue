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
    <rect width="2.8" height="12" x="1" y="6" :fill="color">
      <animate id="svgSpinnersBarsScale0" attributeName="y" begin="0;svgSpinnersBarsScale1.end-0.1s" calcMode="spline"
               dur="0.6s" keySplines=".36,.61,.3,.98;.36,.61,.3,.98" values="6;1;6"/>
      <animate attributeName="height" begin="0;svgSpinnersBarsScale1.end-0.1s" calcMode="spline" dur="0.6s"
               keySplines=".36,.61,.3,.98;.36,.61,.3,.98" values="12;22;12"/>
    </rect>
    <rect width="2.8" height="12" x="5.8" y="6" :fill="color">
      <animate attributeName="y" begin="svgSpinnersBarsScale0.begin+0.1s" calcMode="spline" dur="0.6s"
               keySplines=".36,.61,.3,.98;.36,.61,.3,.98" values="6;1;6"/>
      <animate attributeName="height" begin="svgSpinnersBarsScale0.begin+0.1s" calcMode="spline" dur="0.6s"
               keySplines=".36,.61,.3,.98;.36,.61,.3,.98" values="12;22;12"/>
    </rect>
    <rect width="2.8" height="12" x="10.6" y="6" :fill="color">
      <animate attributeName="y" begin="svgSpinnersBarsScale0.begin+0.2s" calcMode="spline" dur="0.6s"
               keySplines=".36,.61,.3,.98;.36,.61,.3,.98" values="6;1;6"/>
      <animate attributeName="height" begin="svgSpinnersBarsScale0.begin+0.2s" calcMode="spline" dur="0.6s"
               keySplines=".36,.61,.3,.98;.36,.61,.3,.98" values="12;22;12"/>
    </rect>
    <rect width="2.8" height="12" x="15.4" y="6" :fill="color">
      <animate attributeName="y" begin="svgSpinnersBarsScale0.begin+0.3s" calcMode="spline" dur="0.6s"
               keySplines=".36,.61,.3,.98;.36,.61,.3,.98" values="6;1;6"/>
      <animate attributeName="height" begin="svgSpinnersBarsScale0.begin+0.3s" calcMode="spline" dur="0.6s"
               keySplines=".36,.61,.3,.98;.36,.61,.3,.98" values="12;22;12"/>
    </rect>
    <rect width="2.8" height="12" x="20.2" y="6" :fill="color">
      <animate id="svgSpinnersBarsScale1" attributeName="y" begin="svgSpinnersBarsScale0.begin+0.4s" calcMode="spline"
               dur="0.6s" keySplines=".36,.61,.3,.98;.36,.61,.3,.98" values="6;1;6"/>
      <animate attributeName="height" begin="svgSpinnersBarsScale0.begin+0.4s" calcMode="spline" dur="0.6s"
               keySplines=".36,.61,.3,.98;.36,.61,.3,.98" values="12;22;12"/>
    </rect>
  </svg>
</template>

<style lang="scss" scoped>

</style>
