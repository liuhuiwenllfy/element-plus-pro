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
      <animate id="svgSpinnersPulse20" fill="freeze" attributeName="r" begin="0;svgSpinnersPulse21.begin+0.6s"
               calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="0;11"/>
      <animate fill="freeze" attributeName="opacity" begin="0;svgSpinnersPulse21.begin+0.6s" calcMode="spline"
               dur="1.2s" keySplines=".52,.6,.25,.99" values="1;0"/>
    </circle>
    <circle cx="12" cy="12" r="0" :fill="color">
      <animate id="svgSpinnersPulse21" fill="freeze" attributeName="r" begin="svgSpinnersPulse20.begin+0.6s"
               calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="0;11"/>
      <animate fill="freeze" attributeName="opacity" begin="svgSpinnersPulse20.begin+0.6s" calcMode="spline" dur="1.2s"
               keySplines=".52,.6,.25,.99" values="1;0"/>
    </circle>
  </svg>
</template>

<style lang="scss" scoped>

</style>
