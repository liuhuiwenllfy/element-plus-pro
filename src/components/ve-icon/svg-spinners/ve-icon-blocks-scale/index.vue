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
    <rect fill="currentColor" height="9" rx="1" width="9" x="1.5" y="1.5">
      <animate id="svgSpinnersBlocksScale0" attributeName="x" begin="0;svgSpinnersBlocksScale1.end+0.15s" dur="0.6s"
               keyTimes="0;.2;1" values="1.5;.5;1.5"/>
      <animate attributeName="y" begin="0;svgSpinnersBlocksScale1.end+0.15s" dur="0.6s" keyTimes="0;.2;1"
               values="1.5;.5;1.5"/>
      <animate attributeName="width" begin="0;svgSpinnersBlocksScale1.end+0.15s" dur="0.6s" keyTimes="0;.2;1"
               values="9;11;9"/>
      <animate attributeName="height" begin="0;svgSpinnersBlocksScale1.end+0.15s" dur="0.6s" keyTimes="0;.2;1"
               values="9;11;9"/>
    </rect>
    <rect fill="currentColor" height="9" rx="1" width="9" x="13.5" y="1.5">
      <animate attributeName="x" begin="svgSpinnersBlocksScale0.begin+0.15s" dur="0.6s" keyTimes="0;.2;1"
               values="13.5;12.5;13.5"/>
      <animate attributeName="y" begin="svgSpinnersBlocksScale0.begin+0.15s" dur="0.6s" keyTimes="0;.2;1"
               values="1.5;.5;1.5"/>
      <animate attributeName="width" begin="svgSpinnersBlocksScale0.begin+0.15s" dur="0.6s" keyTimes="0;.2;1"
               values="9;11;9"/>
      <animate attributeName="height" begin="svgSpinnersBlocksScale0.begin+0.15s" dur="0.6s" keyTimes="0;.2;1"
               values="9;11;9"/>
    </rect>
    <rect fill="currentColor" height="9" rx="1" width="9" x="13.5" y="13.5">
      <animate attributeName="x" begin="svgSpinnersBlocksScale0.begin+0.3s" dur="0.6s" keyTimes="0;.2;1"
               values="13.5;12.5;13.5"/>
      <animate attributeName="y" begin="svgSpinnersBlocksScale0.begin+0.3s" dur="0.6s" keyTimes="0;.2;1"
               values="13.5;12.5;13.5"/>
      <animate attributeName="width" begin="svgSpinnersBlocksScale0.begin+0.3s" dur="0.6s" keyTimes="0;.2;1"
               values="9;11;9"/>
      <animate attributeName="height" begin="svgSpinnersBlocksScale0.begin+0.3s" dur="0.6s" keyTimes="0;.2;1"
               values="9;11;9"/>
    </rect>
    <rect fill="currentColor" height="9" rx="1" width="9" x="1.5" y="13.5">
      <animate id="svgSpinnersBlocksScale1" attributeName="x" begin="svgSpinnersBlocksScale0.begin+0.45s" dur="0.6s"
               keyTimes="0;.2;1" values="1.5;.5;1.5"/>
      <animate attributeName="y" begin="svgSpinnersBlocksScale0.begin+0.45s" dur="0.6s" keyTimes="0;.2;1"
               values="13.5;12.5;13.5"/>
      <animate attributeName="width" begin="svgSpinnersBlocksScale0.begin+0.45s" dur="0.6s" keyTimes="0;.2;1"
               values="9;11;9"/>
      <animate attributeName="height" begin="svgSpinnersBlocksScale0.begin+0.45s" dur="0.6s" keyTimes="0;.2;1"
               values="9;11;9"/>
    </rect>
  </svg>
</template>

<style lang="scss" scoped>

</style>
