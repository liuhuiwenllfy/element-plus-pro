<script lang="ts" setup>

</script>

<template>
  <div class="ve-justify">
    <div>
      <slot name="left"></slot>
    </div>
    <div>
      <slot name="right"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ve-justify {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
