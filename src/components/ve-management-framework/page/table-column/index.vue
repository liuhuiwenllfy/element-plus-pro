<script lang="ts" setup>
import {Refresh, Tools} from '@element-plus/icons-vue'
import RiFullscreenFill from '~icons/ri/fullscreen-fill'
import RiFullscreenExitLine from '~icons/ri/fullscreen-exit-line'
import {ref} from 'vue'
import {getTableHeight, tableHeight} from '@/assets/js/tableHeight'
import emitter from '@/assets/js/eventBus'

const props = defineProps({
  operationShow: {
    type: Boolean,
    required: false,
    default: () => true
  },
  operationWidth: {
    type: String,
    required: false,
    default: () => '262px'
  },
  expand: {
    type: Boolean,
    required: false,
    default: () => false
  },
  selection: {
    type: Boolean,
    required: false,
    default: () => false
  },
  index: {
    type: Boolean,
    required: false,
    default: () => false
  },
  columnList: {
    type: Array as () => Array<any>,
    required: true,
    default: () => []
  }
})
const checkAll = ref(true)
const isIndeterminate = ref(false)
const column = props.columnList.map(item => {
  return item.prop
})
const checkedColumn = ref(props.columnList.map(item => {
  if (!item.columnSetting) {
    return item.prop
  }
}))
const handleCheckAllChange = (val: boolean) => {
  checkedColumn.value = val ? column : []
  isIndeterminate.value = false
}
const handleCheckedColumnChange = (value: string[]) => {
  const checkedCount = value.length
  checkAll.value = checkedCount === column.length
  isIndeterminate.value = checkedCount > 0 && checkedCount < column.length
}
const hasColumn = (item: any) => {
  return checkedColumn.value.includes(item)
}

const handleRefresh = () => {
  emitter.emit('refresh')
}
const tableFullScreen = ref(false)
const handleFullScreen = () => {
  if (!tableFullScreen.value) {
    document.getElementsByClassName('ve-table')[0].classList.add('ve-tableFullScreen')
    const barHeight = document.getElementsByClassName('ve-table')[0].getElementsByClassName('el-card__header')[0].clientHeight
    tableHeight.value = document.body.clientHeight - barHeight - 78
  } else {
    document.getElementsByClassName('ve-table')[0].classList.remove('ve-tableFullScreen')
    getTableHeight()
  }
  tableFullScreen.value = !tableFullScreen.value
}
</script>

<template>
  <el-table-column v-if="expand" fixed type="expand">
    <template #default="scope">
      <slot :row="scope.row" name="expand"/>
    </template>
  </el-table-column>
  <el-table-column
      v-if="selection"
      fixed
      type="selection"/>
  <el-table-column
      v-if="index"
      fixed
      type="index"/>
  <template v-for="(item, index) of columnList"
            :key="index">
    <el-table-column
        v-if="hasColumn(item.prop)"
        :fixed="item.fixed"
        :label="item.label"
        :min-width="item.minWidth"
        :prop="item.prop"
        :sortable="item.sortable">
      <template v-if="item.coverColumn" #default="scope">
        <slot :name="item.prop" :row="scope.row"/>
      </template>
    </el-table-column>
  </template>
  <el-table-column
      v-if="operationShow"
      :width="operationWidth"
      fixed="right">
    <template #header>
      <label>{{ $t('message.operation') }}</label>
      <div class="operation-colum">
        <el-link
            :icon="tableFullScreen? RiFullscreenExitLine:RiFullscreenFill"
            :underline="false"
            type="primary"
            @click="handleFullScreen"/>
        <el-link
            :icon="Refresh"
            :underline="false"
            type="primary"
            @click="handleRefresh"/>
        <el-popover
            :title="$t('message.columnSetting')"
            placement="bottom-end"
            trigger="hover"
            width="200px">
          <template #reference>
            <el-link
                :icon="Tools"
                :underline="false"
                type="primary">
            </el-link>
          </template>
          <el-checkbox
              v-model="checkAll"
              :indeterminate="isIndeterminate"
              class="ve-column-checkbox"
              @change="handleCheckAllChange">{{ $t('message.checkAll') }}
          </el-checkbox>
          <div class="scrollbar">
            <el-checkbox-group v-model="checkedColumn" @change="handleCheckedColumnChange">
              <el-checkbox
                  v-for="(item, index) of columnList"
                  :key="index"
                  :label="item.prop"
                  class="ve-column-checkbox">
                {{ item.label }}
              </el-checkbox>
            </el-checkbox-group>
          </div>
        </el-popover>
      </div>
    </template>
    <template #default="scope">
      <slot :row="scope.row" name="default"/>
    </template>
  </el-table-column>
</template>

<style lang="less" scoped>
.operation-colum {
  float: right;

  .el-link {
    font-size: 18px;
    margin-right: 10px
  }

  .scrollbar{
    max-height: 200px;
  }
}

</style>
