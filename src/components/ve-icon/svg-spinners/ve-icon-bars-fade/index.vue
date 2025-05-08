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
    <rect width="6" height="14" x="1" y="4" :fill="color">
      <animate id="svgSpinnersBarsFade0" fill="freeze" attributeName="opacity" begin="0;svgSpinnersBarsFade1.end-0.25s"
               dur="0.75s" values="1;.2"/>
    </rect>
    <rect width="6" height="14" x="9" y="4" :fill="color" opacity=".4">
      <animate fill="freeze" attributeName="opacity" begin="svgSpinnersBarsFade0.begin+0.15s" dur="0.75s"
               values="1;.2"/>
    </rect>
    <rect width="6" height="14" x="17" y="4" :fill="color" opacity=".3">
      <animate id="svgSpinnersBarsFade1" fill="freeze" attributeName="opacity" begin="svgSpinnersBarsFade0.begin+0.3s"
               dur="0.75s" values="1;.2"/>
    </rect>
  </svg>
</template>

<style lang="scss" scoped>

</style>
