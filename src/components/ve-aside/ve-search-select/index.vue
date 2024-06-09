<script lang="ts" setup>
import {PropType, reactive, ref, watch} from 'vue'
import {Search} from '@element-plus/icons-vue'
import {SearchOptions} from './SearchOptions'
import {ElIcon, ElOption, ElOptionGroup, ElSelect} from 'element-plus'
import 'element-plus/es/components/icon/style/css'
import 'element-plus/es/components/option/style/css'
import 'element-plus/es/components/option-group/style/css'
import 'element-plus/es/components/select/style/css'

const props = defineProps({
  show: {
    type: Boolean,
    required: false,
    default: () => true
  },
  selected: {
    type: String,
    required: false,
    default: () => ''
  },
  language: {
    type: String as PropType<'zhCn' | 'en'>,
    required: false,
    default: () => 'zhCn'
  },
  options: {
    type: Array<SearchOptions>,
    required: false,
    default: () => []
  },
})

const _selected = ref(props.selected)

watch(() => props.selected, () => {
  _selected.value = props.selected
})
const emits = defineEmits(['handleChange', 'handleShow'])
const handleChange = (value: any) => {
  emits('handleChange', value)
}

const handleShow = () => {
  emits('handleShow')
}

const content = reactive({
  select: {
    zhCn: '请选择',
    en: 'Please select',
  }
})

</script>

<template>
  <div class="aside-search">
    <div v-show="show" class="search">
      <el-select v-model="_selected"
                 :placeholder="content.select[language]"
                 clearable
                 filterable
                 size="default"
                 @change="handleChange"
      >
        <el-option-group v-for="group in options"
                         :key="group.label"
                         :label="language === 'zhCn' ? group.label: group.labelEn"
        >
          <el-option v-for="item in group.options"
                     :key="item.value"
                     :label="language === 'zhCn' ? item.label: item.labelEn"
                     :value="<string>item.value"
          />
        </el-option-group>
      </el-select>
    </div>
    <div v-show="!show"
         class="search-icon"
         @click="handleShow"
    >
      <el-icon>
        <Search/>
      </el-icon>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.aside-search {
  height: 55px;
  border-bottom: 1px solid var(--el-border-color);

  .search {
    padding: 12px 20px;

    .el-select {

      ::v-deep(.el-input) {
        --el-input-border-radius: 0px;
      }
    }
  }

  .search-icon {
    padding: 18px 24px;

    &:hover {
      background-color: var(--el-menu-hover-bg-color);
    }
  }
}
</style>
