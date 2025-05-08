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
    <circle cx="4" cy="12" r="3" :fill="color">
      <animate id="svgSpinners3DotsFade0" fill="freeze" attributeName="opacity"
               begin="0;svgSpinners3DotsFade1.end-0.25s" dur="0.75s" values="1;.2"/>
    </circle>
    <circle cx="12" cy="12" r="3" :fill="color" opacity=".4">
      <animate fill="freeze" attributeName="opacity" begin="svgSpinners3DotsFade0.begin+0.15s" dur="0.75s"
               values="1;.2"/>
    </circle>
    <circle cx="20" cy="12" r="3" :fill="color" opacity=".3">
      <animate id="svgSpinners3DotsFade1" fill="freeze" attributeName="opacity" begin="svgSpinners3DotsFade0.begin+0.3s"
               dur="0.75s" values="1;.2"/>
    </circle>
  </svg>
</template>

<style lang="scss" scoped>

</style>
