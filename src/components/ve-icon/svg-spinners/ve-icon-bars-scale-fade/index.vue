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
    <rect fill="currentColor" height="14" width="6" x="1" y="4">
      <animate id="svgSpinnersBarsScaleFade0" attributeName="y" begin="0;svgSpinnersBarsScaleFade1.end-0.25s"
               dur="0.75s" fill="freeze" values="1;5"/>
      <animate attributeName="height" begin="0;svgSpinnersBarsScaleFade1.end-0.25s" dur="0.75s" fill="freeze"
               values="22;14"/>
      <animate attributeName="opacity" begin="0;svgSpinnersBarsScaleFade1.end-0.25s" dur="0.75s" fill="freeze"
               values="1;.2"/>
    </rect>
    <rect fill="currentColor" height="14" opacity=".4" width="6" x="9" y="4">
      <animate attributeName="y" begin="svgSpinnersBarsScaleFade0.begin+0.15s" dur="0.75s" fill="freeze" values="1;5"/>
      <animate attributeName="height" begin="svgSpinnersBarsScaleFade0.begin+0.15s" dur="0.75s" fill="freeze"
               values="22;14"/>
      <animate attributeName="opacity" begin="svgSpinnersBarsScaleFade0.begin+0.15s" dur="0.75s" fill="freeze"
               values="1;.2"/>
    </rect>
    <rect fill="currentColor" height="14" opacity=".3" width="6" x="17" y="4">
      <animate id="svgSpinnersBarsScaleFade1" attributeName="y" begin="svgSpinnersBarsScaleFade0.begin+0.3s"
               dur="0.75s" fill="freeze" values="1;5"/>
      <animate attributeName="height" begin="svgSpinnersBarsScaleFade0.begin+0.3s" dur="0.75s" fill="freeze"
               values="22;14"/>
      <animate attributeName="opacity" begin="svgSpinnersBarsScaleFade0.begin+0.3s" dur="0.75s" fill="freeze"
               values="1;.2"/>
    </rect>
  </svg>
</template>

<style lang="scss" scoped>

</style>
