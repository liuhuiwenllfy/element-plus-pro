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
    <!-- Icon from Material Design Light by Pictogrammers - https://github.com/Templarian/MaterialDesignLight/blob/master/LICENSE.md -->
    <path d="M2 21v-5h4v5zm1-4v3h2v-3zm4 4v-9h4v9zm1-8v7h2v-7zm4 8V8h4v13zm1-12v11h2V9zm4 12V4h4v17zm1-16v15h2V5z"
          fill="currentColor"/>
  </svg>
</template>

<style lang="scss" scoped>

</style>
