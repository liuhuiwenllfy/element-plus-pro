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
          d="M1029.818182 163.677091C1029.818182 114.036364 989.44 69.818182 939.776 69.818182H95.837091C46.219636 69.818182 0 117.899636 0 167.517091v618.891636C0 836.072727 46.219636 884.363636 95.837091 884.363636h306.734545l115.2 115.153455L632.971636 884.363636h306.804364C989.44 884.363636 1024 836.072727 1024 786.432V685.614545l2.792727-3.490909 3.025455-518.446545zM768 581.818182H279.272727v-69.818182h488.727273v69.818182z m0-186.181818H279.272727v-69.818182h488.727273v69.818182z"
    ></path>
  </svg>
</template>

<style lang="scss" scoped>

</style>
