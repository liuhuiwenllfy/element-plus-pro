<script lang="ts" setup>
import VePage from "@/components/ve-page/index.vue";
import VeJustify from '@/components/ve-justify/index.vue'
import readme from './index.md?raw'
import json from '@/components/ve-justify/package.json'

const slots = [
  {
    name: 'left',
    details: '左侧区域'
  },
  {
    name: 'right',
    details: '右侧区域'
  },
]
</script>

<template>
  <ve-page :_slots="slots" :json="json" :readme="readme" class="ve-justify">
    <template #default>
      <div class="content">
        <ve-justify>
          <template #left>
            <div class="region">
              左侧区域
            </div>
          </template>
          <template #right>
            <div class="region">
              右侧区域
            </div>
          </template>
        </ve-justify>
      </div>
    </template>
  </ve-page>
</template>

<style lang="scss" scoped>
.ve-justify {
  .content {
    width: 400px;
    border: $dashed;

    .region {
      background-color: $brand5;
      padding: 20px;
    }
  }
}
</style>
