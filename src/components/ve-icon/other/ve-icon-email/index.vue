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
  <svg :height="size" :width="size" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
    <path :fill="color"
          d="M1022.08 716.928V300.48L804.8 517.824l217.28 199.04M655.36 667.2a188.16 188.16 0 0 1-133.888 55.488c-50.56 0-98.176-19.712-133.952-55.488L270.976 550.592 20.864 779.84v38.4c0 50.24 40.832 91.072 91.008 91.072h819.2c50.176 0 91.008-40.832 91.008-91.008v-39.68L772.544 550.016l-117.12 117.12"
    ></path>
    <path :fill="color"
          d="M932.928 128h-819.2c-50.112 0-90.88 40.832-90.88 91.008v19.008l398.784 398.912c27.2 27.136 63.36 42.112 101.76 42.112 38.464 0 74.624-14.976 101.76-42.112L1024 238.016v-19.008c0-50.176-40.96-91.008-91.072-91.008M20.864 300.48v417.6L238.72 518.4 20.864 300.48"
    ></path>
  </svg>
</template>

<style lang="scss" scoped>

</style>
