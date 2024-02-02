<script lang="ts" setup>
import CarbonTableShortcut from '~icons/carbon/table-shortcut'
</script>

<template>
  <el-card class="ve-table" shadow="never">
    <template #header>
      <div class="card-header">
        <el-space size="small">
          <el-icon style="font-size: 20px">
            <CarbonTableShortcut/>
          </el-icon>
          <span>{{ $t('message.tableDataArea') }}</span>
        </el-space>
        <div>
          <slot name="header"/>
        </div>
      </div>
    </template>
    <slot name="main"/>
  </el-card>
</template>

<style lang="less" scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 32px;
}
</style>
