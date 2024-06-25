<script lang="ts" setup>
import {VeSearchLocate} from 've-icon/components'
import {PropType, reactive, ref} from 'vue'
import {ElButton, ElCard, ElIcon, ElSpace} from 'element-plus'
import 'element-plus/es/components/card/style/css'
import 'element-plus/es/components/icon/style/css'
import 'element-plus/es/components/space/style/css'
import 'element-plus/es/components/button/style/css'
import {ArrowDown, ArrowUp} from "@element-plus/icons-vue";

const props = defineProps({
  show: {
    type: Boolean,
    required: false,
    default: () => false
  },
  open: {
    type: Boolean,
    required: false,
    default: () => false
  },
  language: {
    type: String as PropType<'zhCn' | 'en' | string>,
    required: false,
    default: () => 'zhCn'
  },
})

const _open = ref(props.open)

const emits = defineEmits(['handleClick'])
const handleClick = () => {
  _open.value = !_open.value
  emits('handleClick', _open.value)
}

const content = reactive<any>({
  searchArea: {
    zhCn: '搜索区域',
    en: 'Search area'
  },
  collapse: {
    zhCn: '收起',
    en: 'Collapse',
  },
  expand: {
    zhCn: '展开',
    en: 'Expand',
  }
})
</script>

<template>
  <el-card class="ve-table-search" shadow="never">
    <template #header>
      <div class="card-header">
        <el-space size="small">
          <el-icon style="font-size: 20px">
            <VeSearchLocate/>
          </el-icon>
          <span>{{ content.searchArea[language] }}</span>
        </el-space>
        <div>
          <el-button v-show="show" style="float: right; margin-left: 12px" text type="primary" @click="handleClick">
            <span style="margin-right: 10px">{{ show ? content.collapse[language] : content.expand[language] }}</span>
            <el-icon v-if="!_open">
              <ArrowDown/>
            </el-icon>
            <el-icon v-else>
              <ArrowUp/>
            </el-icon>
          </el-button>
          <slot name="searchBtn"/>
        </div>
      </div>
    </template>
    <slot/>
  </el-card>
</template>

<style lang="scss" scoped>
//表格搜索通用样式
.ve-table-search {
  .search-btn {
    float: right;
  }

  .el-form-item {
    margin-bottom: 18px;
  }

  .el-input {
    width: 200px
  }

  ::v-deep(.el-card__header) {
    padding: 10px 20px;
  }

  ::v-deep(.el-card__body) {
    padding: 20px 20px 2px 20px;
  }

  margin-bottom: 10px;

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 32px;
  }
}
</style>
