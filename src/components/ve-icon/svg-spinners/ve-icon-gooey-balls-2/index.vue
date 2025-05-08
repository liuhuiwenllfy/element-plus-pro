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
      <filter id="svgSpinnersGooeyBalls20">
        <feGaussianBlur in="SourceGraphic" result="y" stdDeviation="1"/>
        <feColorMatrix in="y" result="z" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 18 -7"/>
        <feBlend in="SourceGraphic" in2="z"/>
      </filter>
    </defs>
    <g filter="url(#svgSpinnersGooeyBalls20)">
      <circle cx="5" cy="12" r="4" :fill="color">
        <animate attributeName="cx" calcMode="spline" dur="2s" keySplines=".36,.62,.43,.99;.79,0,.58,.57"
                 repeatCount="indefinite" values="5;8;5"/>
      </circle>
      <circle cx="19" cy="12" r="4" :fill="color">
        <animate attributeName="cx" calcMode="spline" dur="2s" keySplines=".36,.62,.43,.99;.79,0,.58,.57"
                 repeatCount="indefinite" values="19;16;19"/>
      </circle>
      <animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate"
                        values="0 12 12;360 12 12"/>
    </g>
  </svg>
</template>

<style lang="scss" scoped>

</style>
