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
    <circle cx="4" cy="12" r="1.5" :fill="color">
      <animate attributeName="r" dur="0.75s" repeatCount="indefinite" values="1.5;3;1.5"/>
    </circle>
    <circle cx="12" cy="12" r="3" :fill="color">
      <animate attributeName="r" dur="0.75s" repeatCount="indefinite" values="3;1.5;3"/>
    </circle>
    <circle cx="20" cy="12" r="1.5" :fill="color">
      <animate attributeName="r" dur="0.75s" repeatCount="indefinite" values="1.5;3;1.5"/>
    </circle>
  </svg>
</template>

<style lang="scss" scoped>

</style>
