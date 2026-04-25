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
    <rect fill="currentColor" height="10" rx="1" width="10" x="1" y="1">
      <animate id="svgSpinnersBlocksShuffle30" attributeName="x" begin="0;svgSpinnersBlocksShuffle3b.end" dur="0.2s"
               fill="freeze" values="1;13"/>
      <animate id="svgSpinnersBlocksShuffle31" attributeName="y" begin="svgSpinnersBlocksShuffle38.end" dur="0.2s"
               fill="freeze" values="1;13"/>
      <animate id="svgSpinnersBlocksShuffle32" attributeName="x" begin="svgSpinnersBlocksShuffle39.end" dur="0.2s"
               fill="freeze" values="13;1"/>
      <animate id="svgSpinnersBlocksShuffle33" attributeName="y" begin="svgSpinnersBlocksShuffle3a.end" dur="0.2s"
               fill="freeze" values="13;1"/>
    </rect>
    <rect fill="currentColor" height="10" rx="1" width="10" x="1" y="13">
      <animate id="svgSpinnersBlocksShuffle34" attributeName="y" begin="svgSpinnersBlocksShuffle30.end" dur="0.2s"
               fill="freeze" values="13;1"/>
      <animate id="svgSpinnersBlocksShuffle35" attributeName="x" begin="svgSpinnersBlocksShuffle31.end" dur="0.2s"
               fill="freeze" values="1;13"/>
      <animate id="svgSpinnersBlocksShuffle36" attributeName="y" begin="svgSpinnersBlocksShuffle32.end" dur="0.2s"
               fill="freeze" values="1;13"/>
      <animate id="svgSpinnersBlocksShuffle37" attributeName="x" begin="svgSpinnersBlocksShuffle33.end" dur="0.2s"
               fill="freeze" values="13;1"/>
    </rect>
    <rect fill="currentColor" height="10" rx="1" width="10" x="13" y="13">
      <animate id="svgSpinnersBlocksShuffle38" attributeName="x" begin="svgSpinnersBlocksShuffle34.end" dur="0.2s"
               fill="freeze" values="13;1"/>
      <animate id="svgSpinnersBlocksShuffle39" attributeName="y" begin="svgSpinnersBlocksShuffle35.end" dur="0.2s"
               fill="freeze" values="13;1"/>
      <animate id="svgSpinnersBlocksShuffle3a" attributeName="x" begin="svgSpinnersBlocksShuffle36.end" dur="0.2s"
               fill="freeze" values="1;13"/>
      <animate id="svgSpinnersBlocksShuffle3b" attributeName="y" begin="svgSpinnersBlocksShuffle37.end" dur="0.2s"
               fill="freeze" values="1;13"/>
    </rect>
  </svg>
</template>

<style lang="scss" scoped>

</style>
