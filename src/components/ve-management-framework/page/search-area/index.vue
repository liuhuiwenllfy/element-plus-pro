<script lang="ts" setup>
import CarbonSearchLocate from '~icons/carbon/search-locate'
import AdvancedSearch from '@/components/ve-management-framework/page/search-area/advanced-search/index.vue'
import {getTableHeight} from '@/assets/js/tableHeight'
import {reactive} from 'vue'

const data = reactive({
  show: false
})
const props = defineProps({
  clickShow: {
    type: Boolean,
    required: false,
    default: () => false
  }
})
const emits = defineEmits(['handleClick'])
const handleClick = () => {
  data.show = !data.show
  getTableHeight()
  emits('handleClick', data.show)
}
</script>

<template>
  <el-card class="ve-table-search" shadow="never">
    <template #header>
      <div class="card-header">
        <el-space size="small">
          <el-icon style="font-size: 20px">
            <CarbonSearchLocate/>
          </el-icon>
          <span>{{ $t('message.searchArea') }}</span>
        </el-space>
        <div>
          <AdvancedSearch v-show="clickShow" :show="data.show" @handleClick="handleClick"/>
          <slot name="searchBtn"/>
        </div>
      </div>
    </template>
    <slot name="default"/>
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
