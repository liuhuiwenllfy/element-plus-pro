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
    <defs>
      <filter id="svgSpinnersGooeyBalls10">
        <feGaussianBlur in="SourceGraphic" result="y" stdDeviation="1.5"/>
        <feColorMatrix in="y" result="z" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 18 -7"/>
        <feBlend in="SourceGraphic" in2="z"/>
      </filter>
    </defs>
    <g :fill="color" filter="url(#svgSpinnersGooeyBalls10)">
      <circle cx="4" cy="12" r="3">
        <animate attributeName="cx" calcMode="spline" dur="0.75s" keySplines=".56,.52,.17,.98;.56,.52,.17,.98"
                 repeatCount="indefinite" values="4;9;4"/>
        <animate attributeName="r" calcMode="spline" dur="0.75s" keySplines=".56,.52,.17,.98;.56,.52,.17,.98"
                 repeatCount="indefinite" values="3;8;3"/>
      </circle>
      <circle cx="15" cy="12" r="8">
        <animate attributeName="cx" calcMode="spline" dur="0.75s" keySplines=".56,.52,.17,.98;.56,.52,.17,.98"
                 repeatCount="indefinite" values="15;20;15"/>
        <animate attributeName="r" calcMode="spline" dur="0.75s" keySplines=".56,.52,.17,.98;.56,.52,.17,.98"
                 repeatCount="indefinite" values="8;3;8"/>
      </circle>
    </g>
  </svg>
</template>

<style lang="scss" scoped>

</style>
