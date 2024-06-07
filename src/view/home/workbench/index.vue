<script lang="ts" setup>
import Welcome from '@/view/home/workbench/welcome/index.vue'
</script>

<template>
  <div class="workbench">
    <welcome/>
  </div>
</template>

<style lang="scss" scoped>
.workbench {

  .grid-card {
    position: relative;
    margin: 0 7px 5px 7px;

    .grid-card-dropdown {
      position: absolute;
      top: 27px;
      right: 20px;
    }
  }
}
</style>
