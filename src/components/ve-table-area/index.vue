<script lang="ts" setup>
import {VeTableShortcut} from 've-icon/components'
import {ElCard, ElIcon, ElSpace} from 'element-plus'
import 'element-plus/es/components/space/style/css'
import 'element-plus/es/components/card/style/css'
import 'element-plus/es/components/icon/style/css'
import {PropType, reactive} from 'vue'

defineProps({
  language: {
    type: String as PropType<'zhCn' | 'en'>,
    required: false,
    default: () => 'zhCn'
  }
})

const content = reactive({
  tableDataArea: {
    zhCn: '表格数据区域',
    en: 'Table entity area',
  }
})
</script>

<template>
  <el-card class="ve-table" shadow="never">
    <template #header>
      <div class="card-header">
        <el-space size="small">
          <el-icon style="font-size: 20px">
            <VeTableShortcut/>
          </el-icon>
          <span>{{ content.tableDataArea[language] }}</span>
        </el-space>
        <div>
          <slot name="header"/>
        </div>
      </div>
    </template>
    <slot name="main"/>
  </el-card>
</template>

<style lang="scss" scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 32px;
}
</style>
