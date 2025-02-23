<script lang="ts" setup>
import {Refresh, Tools} from '@element-plus/icons-vue'
import {VeFullscreenExitLine, VeFullscreenFill} from 've-icon/components'
import {PropType, reactive, ref} from 'vue'
import {ElCheckbox, ElCheckboxGroup, ElLink, ElPopover, ElTableColumn} from 'element-plus'
import 'element-plus/es/components/table-column/style/css'
import 'element-plus/es/components/link/style/css'
import 'element-plus/es/components/popover/style/css'
import 'element-plus/es/components/checkbox/style/css'
import 'element-plus/es/components/checkbox-group/style/css'

const props = defineProps({
  tableHeight: {
    type: Number,
    required: false,
    default: () => 0
  },
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
  },
  language: {
    type: String as PropType<'zhCn' | 'en' | string>,
    required: false,
    default: () => 'zhCn'
  },
  regionClass: {
    type: String,
    required: true,
    default: () => 've-table'
  }
})

const _tableHeight = ref()

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
const handleCheckAllChange = (val: any) => {
  checkedColumn.value = val ? column : []
  isIndeterminate.value = false
}
const handleCheckedColumnChange = (value: any[]) => {
  const checkedCount = value.length
  checkAll.value = checkedCount === column.length
  isIndeterminate.value = checkedCount > 0 && checkedCount < column.length
}
const hasColumn = (item: any) => {
  return checkedColumn.value.includes(item)
}

const emits = defineEmits(['handleFullScreen', 'handleRefresh'])

const handleRefresh = () => {
  emits('handleRefresh')
}

const tableFullScreen = ref(false)
const handleFullScreen = () => {
  if (!tableFullScreen.value) {
    document.getElementsByClassName(props.regionClass)[0].classList.add('ve-tableFullScreen')
    const barHeight = document.getElementsByClassName('ve-table')[0].getElementsByClassName('el-card__header')[0].clientHeight
    _tableHeight.value = document.body.clientHeight - barHeight - 78
    emits('handleFullScreen', true, _tableHeight.value)
  } else {
    document.getElementsByClassName(props.regionClass)[0].classList.remove('ve-tableFullScreen')
    emits('handleFullScreen', false, props.tableHeight)
  }
  tableFullScreen.value = !tableFullScreen.value
}

const content = reactive<any>({
  operation: {
    zhCn: '操作',
    en: 'Operation',
  },
  columnSetting: {
    zhCn: '列设置',
    en: 'column settings',
  },
  checkAll: {
    zhCn: '全选',
    en: 'Check all',
  },
})
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
      type="selection"
  />
  <el-table-column
      v-if="index"
      fixed
      type="index"
  />
  <template v-for="item in columnList" :key="item.prop">
    <el-table-column
        v-if="hasColumn(item.prop)"
        :fixed="item.fixed"
        :label="item.label"
        :min-width="item.minWidth"
        :prop="item.prop"
        :sortable="item.sortable"
    >
      <template v-if="item.coverColumn" #default="scope">
        <slot :name="item.prop" :row="scope.row"/>
      </template>
    </el-table-column>
  </template>
  <el-table-column
      v-if="operationShow"
      :width="operationWidth"
      fixed="right"
  >
    <template #header>
      <label>{{ content.operation[language] }}</label>
      <div class="operation-colum">
        <el-link
            :icon="tableFullScreen? VeFullscreenExitLine:VeFullscreenFill"
            :underline="false"
            type="primary"
            @click="handleFullScreen"
        />
        <el-link
            :icon="Refresh"
            :underline="false"
            type="primary"
            @click="handleRefresh"
        />
        <el-popover
            :title="content.columnSetting[language]"
            placement="bottom-end"
            trigger="hover"
            width="200px"
        >
          <template #reference>
            <el-link
                :icon="Tools"
                :underline="false"
                type="primary"
            >
            </el-link>
          </template>
          <el-checkbox
              v-model="checkAll"
              :indeterminate="isIndeterminate"
              class="ve-column-checkbox"
              @change="handleCheckAllChange"
          >{{ content.checkAll[language] }}
          </el-checkbox>
          <div class="scrollbar">
            <el-checkbox-group v-model="checkedColumn" @change="handleCheckedColumnChange">
              <el-checkbox
                  v-for="(item, index) of columnList"
                  :key="index"
                  :label="item.prop"
                  class="ve-column-checkbox"
              >
                {{ item.label }}
              </el-checkbox>
            </el-checkbox-group>
          </div>
        </el-popover>
      </div>
    </template>
    <template #default="scope">
      <slot :row="scope.row"/>
    </template>
  </el-table-column>
</template>

<style lang="scss" scoped>
.operation-colum {
  float: right;

  .el-link {
    font-size: 18px;
    margin-right: 10px
  }

  .scrollbar {
    max-height: 200px;
  }
}

//表格列显隐复选框样式
.ve-column-checkbox {
  width: 100%;
  margin-right: 0;
}
</style>
<style lang="scss">
//全屏样式
.ve-tableFullScreen {
  position: fixed;
  left: 0;
  top: 0;
  width: calc(100% - 2px);
  height: calc(100% - 2px);
  z-index: 999;

  .el-table {
    height: 100%;
  }
}
</style>
