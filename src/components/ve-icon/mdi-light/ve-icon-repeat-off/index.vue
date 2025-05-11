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
    <!-- Icon from Material Design Light by Pictogrammers - https://github.com/Templarian/MaterialDesignLight/blob/master/LICENSE.md -->
    <path :fill="color"
          d="m2.79 4.46l.71-.71L20.25 20.5l-.71.71l-3.2-3.21H4.91l2.33 2.33l-.7.71L3 17.5l3.54-3.54l.7.71L4.91 17h10.43l-9-9H6v4H5V7h.34zM20 7.5l-3.54 3.54l-.7-.71L18.09 8H9.16l-1-1h9.93l-2.33-2.33l.7-.71zM17 13h1v3.84l-1-1z"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
