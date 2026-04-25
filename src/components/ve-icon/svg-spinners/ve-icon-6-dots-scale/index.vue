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
    <circle cx="12" cy="3" fill="currentColor" r="0">
      <animate id="svgSpinners6DotsScale0" attributeName="r" begin="0;svgSpinners6DotsScale2.end-0.5s" calcMode="spline"
               dur="0.6s" fill="freeze" keySplines="0,1,0,1;.53,0,.61,.73" keyTimes="0;.2;1" values="0;2;0"/>
    </circle>
    <circle cx="16.5" cy="4.21" fill="currentColor" r="0">
      <animate id="svgSpinners6DotsScale1" attributeName="r" begin="svgSpinners6DotsScale0.begin+0.1s" calcMode="spline"
               dur="0.6s" fill="freeze" keySplines="0,1,0,1;.53,0,.61,.73" keyTimes="0;.2;1" values="0;2;0"/>
    </circle>
    <circle cx="7.5" cy="4.21" fill="currentColor" r="0">
      <animate id="svgSpinners6DotsScale2" attributeName="r" begin="svgSpinners6DotsScale4.begin+0.1s" calcMode="spline"
               dur="0.6s" fill="freeze" keySplines="0,1,0,1;.53,0,.61,.73" keyTimes="0;.2;1" values="0;2;0"/>
    </circle>
    <circle cx="19.79" cy="7.5" fill="currentColor" r="0">
      <animate id="svgSpinners6DotsScale3" attributeName="r" begin="svgSpinners6DotsScale1.begin+0.1s" calcMode="spline"
               dur="0.6s" fill="freeze" keySplines="0,1,0,1;.53,0,.61,.73" keyTimes="0;.2;1" values="0;2;0"/>
    </circle>
    <circle cx="4.21" cy="7.5" fill="currentColor" r="0">
      <animate id="svgSpinners6DotsScale4" attributeName="r" begin="svgSpinners6DotsScale6.begin+0.1s" calcMode="spline"
               dur="0.6s" fill="freeze" keySplines="0,1,0,1;.53,0,.61,.73" keyTimes="0;.2;1" values="0;2;0"/>
    </circle>
    <circle cx="21" cy="12" fill="currentColor" r="0">
      <animate id="svgSpinners6DotsScale5" attributeName="r" begin="svgSpinners6DotsScale3.begin+0.1s" calcMode="spline"
               dur="0.6s" fill="freeze" keySplines="0,1,0,1;.53,0,.61,.73" keyTimes="0;.2;1" values="0;2;0"/>
    </circle>
    <circle cx="3" cy="12" fill="currentColor" r="0">
      <animate id="svgSpinners6DotsScale6" attributeName="r" begin="svgSpinners6DotsScale8.begin+0.1s" calcMode="spline"
               dur="0.6s" fill="freeze" keySplines="0,1,0,1;.53,0,.61,.73" keyTimes="0;.2;1" values="0;2;0"/>
    </circle>
    <circle cx="19.79" cy="16.5" fill="currentColor" r="0">
      <animate id="svgSpinners6DotsScale7" attributeName="r" begin="svgSpinners6DotsScale5.begin+0.1s" calcMode="spline"
               dur="0.6s" fill="freeze" keySplines="0,1,0,1;.53,0,.61,.73" keyTimes="0;.2;1" values="0;2;0"/>
    </circle>
    <circle cx="4.21" cy="16.5" fill="currentColor" r="0">
      <animate id="svgSpinners6DotsScale8" attributeName="r" begin="svgSpinners6DotsScalea.begin+0.1s" calcMode="spline"
               dur="0.6s" fill="freeze" keySplines="0,1,0,1;.53,0,.61,.73" keyTimes="0;.2;1" values="0;2;0"/>
    </circle>
    <circle cx="16.5" cy="19.79" fill="currentColor" r="0">
      <animate id="svgSpinners6DotsScale9" attributeName="r" begin="svgSpinners6DotsScale7.begin+0.1s" calcMode="spline"
               dur="0.6s" fill="freeze" keySplines="0,1,0,1;.53,0,.61,.73" keyTimes="0;.2;1" values="0;2;0"/>
    </circle>
    <circle cx="7.5" cy="19.79" fill="currentColor" r="0">
      <animate id="svgSpinners6DotsScalea" attributeName="r" begin="svgSpinners6DotsScaleb.begin+0.1s" calcMode="spline"
               dur="0.6s" fill="freeze" keySplines="0,1,0,1;.53,0,.61,.73" keyTimes="0;.2;1" values="0;2;0"/>
    </circle>
    <circle cx="12" cy="21" fill="currentColor" r="0">
      <animate id="svgSpinners6DotsScaleb" attributeName="r" begin="svgSpinners6DotsScale9.begin+0.1s" calcMode="spline"
               dur="0.6s" fill="freeze" keySplines="0,1,0,1;.53,0,.61,.73" keyTimes="0;.2;1" values="0;2;0"/>
    </circle>
  </svg>
</template>

<style lang="scss" scoped>

</style>
