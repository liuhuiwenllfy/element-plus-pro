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
      <animate id="svgSpinnersBlocksShuffle20" attributeName="x" begin="0;svgSpinnersBlocksShuffle27.end" dur="0.2s"
               fill="freeze" values="1;13"/>
      <animate id="svgSpinnersBlocksShuffle21" attributeName="y" begin="svgSpinnersBlocksShuffle24.end" dur="0.2s"
               fill="freeze" values="1;13"/>
      <animate id="svgSpinnersBlocksShuffle22" attributeName="x" begin="svgSpinnersBlocksShuffle25.end" dur="0.2s"
               fill="freeze" values="13;1"/>
      <animate id="svgSpinnersBlocksShuffle23" attributeName="y" begin="svgSpinnersBlocksShuffle26.end" dur="0.2s"
               fill="freeze" values="13;1"/>
    </rect>
    <rect fill="currentColor" height="10" rx="1" width="10" x="1" y="13">
      <animate id="svgSpinnersBlocksShuffle24" attributeName="y" begin="svgSpinnersBlocksShuffle20.end" dur="0.2s"
               fill="freeze" values="13;1"/>
      <animate id="svgSpinnersBlocksShuffle25" attributeName="x" begin="svgSpinnersBlocksShuffle21.end" dur="0.2s"
               fill="freeze" values="1;13"/>
      <animate id="svgSpinnersBlocksShuffle26" attributeName="y" begin="svgSpinnersBlocksShuffle22.end" dur="0.2s"
               fill="freeze" values="1;13"/>
      <animate id="svgSpinnersBlocksShuffle27" attributeName="x" begin="svgSpinnersBlocksShuffle23.end" dur="0.2s"
               fill="freeze" values="13;1"/>
    </rect>
  </svg>
</template>

<style lang="scss" scoped>

</style>
