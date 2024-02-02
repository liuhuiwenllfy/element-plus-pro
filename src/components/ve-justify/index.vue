<!--
左右分部布局
-->
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

<style lang="less" scoped>
.ve-justify {
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
