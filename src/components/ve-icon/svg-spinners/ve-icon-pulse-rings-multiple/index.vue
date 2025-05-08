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
    <path :fill="color" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"
          transform="matrix(0 0 0 0 12 12)">
      <animateTransform id="svgSpinnersPulseRingsMultiple0" attributeName="transform"
                        begin="0;svgSpinnersPulseRingsMultiple2.end" calcMode="spline" dur="1.2s"
                        keySplines=".52,.6,.25,.99" type="translate" values="12 12;0 0"/>
      <animateTransform additive="sum" attributeName="transform" begin="0;svgSpinnersPulseRingsMultiple2.end"
                        calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" type="scale" values="0;1"/>
      <animate attributeName="opacity" begin="0;svgSpinnersPulseRingsMultiple2.end" calcMode="spline" dur="1.2s"
               keySplines=".52,.6,.25,.99" values="1;0"/>
    </path>
    <path :fill="color" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"
          transform="matrix(0 0 0 0 12 12)">
      <animateTransform id="svgSpinnersPulseRingsMultiple1" attributeName="transform"
                        begin="svgSpinnersPulseRingsMultiple0.begin+0.2s" calcMode="spline" dur="1.2s"
                        keySplines=".52,.6,.25,.99" type="translate" values="12 12;0 0"/>
      <animateTransform additive="sum" attributeName="transform" begin="svgSpinnersPulseRingsMultiple0.begin+0.2s"
                        calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" type="scale" values="0;1"/>
      <animate attributeName="opacity" begin="svgSpinnersPulseRingsMultiple0.begin+0.2s" calcMode="spline" dur="1.2s"
               keySplines=".52,.6,.25,.99" values="1;0"/>
    </path>
    <path :fill="color" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"
          transform="matrix(0 0 0 0 12 12)">
      <animateTransform id="svgSpinnersPulseRingsMultiple2" attributeName="transform"
                        begin="svgSpinnersPulseRingsMultiple0.begin+0.4s" calcMode="spline" dur="1.2s"
                        keySplines=".52,.6,.25,.99" type="translate" values="12 12;0 0"/>
      <animateTransform additive="sum" attributeName="transform" begin="svgSpinnersPulseRingsMultiple0.begin+0.4s"
                        calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" type="scale" values="0;1"/>
      <animate attributeName="opacity" begin="svgSpinnersPulseRingsMultiple0.begin+0.4s" calcMode="spline" dur="1.2s"
               keySplines=".52,.6,.25,.99" values="1;0"/>
    </path>
  </svg>
</template>

<style lang="scss" scoped>

</style>
