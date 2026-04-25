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
    <circle cx="4" cy="12" fill="currentColor" r="3">
      <animate id="svgSpinners3DotsFade0" attributeName="opacity" begin="0;svgSpinners3DotsFade1.end-0.25s"
               dur="0.75s" fill="freeze" values="1;.2"/>
    </circle>
    <circle cx="12" cy="12" fill="currentColor" opacity=".4" r="3">
      <animate attributeName="opacity" begin="svgSpinners3DotsFade0.begin+0.15s" dur="0.75s" fill="freeze"
               values="1;.2"/>
    </circle>
    <circle cx="20" cy="12" fill="currentColor" opacity=".3" r="3">
      <animate id="svgSpinners3DotsFade1" attributeName="opacity" begin="svgSpinners3DotsFade0.begin+0.3s" dur="0.75s"
               fill="freeze" values="1;.2"/>
    </circle>
  </svg>
</template>

<style lang="scss" scoped>

</style>
