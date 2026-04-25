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
    <path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z" fill="currentColor"/>
    <rect fill="currentColor" height="7" rx="1" width="2" x="11" y="6">
      <animateTransform attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate"
                        values="0 12 12;360 12 12"/>
    </rect>
    <rect fill="currentColor" height="9" rx="1" width="2" x="11" y="11">
      <animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate"
                        values="0 12 12;360 12 12"/>
    </rect>
  </svg>
</template>

<style lang="scss" scoped>

</style>
