<script lang="ts" setup>
import type {TabPaneName, TabsPaneContext} from 'element-plus'
import {ElDropdown, ElDropdownItem, ElDropdownMenu, ElIcon, ElMessage, ElSpace, ElTabPane, ElTabs} from 'element-plus'
import {PropType, reactive, ref, watch} from 'vue'
import 'element-plus/es/components/tabs/style/css'
import 'element-plus/es/components/tab-pane/style/css'
import 'element-plus/es/components/space/style/css'
import 'element-plus/es/components/icon/style/css'
import 'element-plus/es/components/dropdown/style/css'
import 'element-plus/es/components/dropdown-menu/style/css'
import 'element-plus/es/components/dropdown-item/style/css'
import 'element-plus/es/components/message/style/css'
import {Tab} from './Tab.ts'

const props = defineProps({
  tabList: {
    type: Array<Tab>,
    required: true
  },
  activeName: {
    type: String,
    required: true
  },
  language: {
    type: String as PropType<'zhCn' | 'en' | string>,
    required: false,
    default: () => 'zhCn'
  },
})

const _activeName = ref(props.activeName)

watch(() => props.activeName, () => {
  _activeName.value = props.activeName
})

const _tabList = ref<Tab[]>(props.tabList)

watch(() => props.tabList, () => {
  _tabList.value = props.tabList
})

const emits = defineEmits(['handleRouter'])

//关闭指定tab
const removeTab = (targetName: TabPaneName) => {
  //首页不能关闭
  if (targetName === _tabList.value[0].name) {
    return ElMessage.warning(content.closeWarn[props.language])
  }
  //获取路由下标
  const index = _tabList.value.findIndex(item => item.name === _activeName.value)
  //获取当前选中的tab下标
  const current = _tabList.value.findIndex(item => item.name === targetName)
  //删除当前选中tab
  _tabList.value.splice(current, 1)
  //判断当前下标和路由下标是否相同，是->跳转前一位路由
  if (index === current) {
    emits('handleRouter', _tabList.value[index - 1].name)
  }
}
//关闭当前tab
const closeItem = () => {
  if (_activeName.value === _tabList.value[0].name) {
    return ElMessage.warning(content.closeWarn[props.language])
  }
  //获取路由下标
  const index = _tabList.value.findIndex(item => item.name === _activeName.value)
  //获取当前选中的tab下标
  _tabList.value.splice(index, 1)
  //跳转前一位路由
  emits('handleRouter', _tabList.value[index - 1].name)
}
//关闭其他tab
const closeOther = () => {
  //获取路由下标
  const index = _tabList.value.findIndex(item => item.name === _activeName.value)
  //下表是否为0，是->删除0之后的所有数据
  if (index === 0) {
    _tabList.value.splice(1)
  }
  //下表是否为1且集合长度大于2
  if (index === 1 && _tabList.value.length > 2) {
    _tabList.value.splice(2)
  }
  //下表大于1
  if (index > 1) {
    _tabList.value.splice(1, index - 1)
    _tabList.value.splice(2)
  }
}
//关闭左侧tab
const closeLeft = () => {
  //获取路由下标
  const index = _tabList.value.findIndex(item => item.name === _activeName.value)
  //判断下表是否大于1
  if (index > 1) {
    _tabList.value.splice(1, index - 1)
  }
}
//关闭右侧tab
const closeRight = () => {
  //获取路由下标
  const index = _tabList.value.findIndex(item => item.name === _activeName.value)
  //判断下表是否小于总长度
  if (index < _tabList.value.length - 1) {
    _tabList.value.splice(index + 1, _tabList.value.length - index)
  }
}
//关闭所有tab
const closeAll = () => {
  //判断总长度是否大于1
  if (_tabList.value.length > 1) {
    _tabList.value.splice(1)
  }
  //跳转首页
  emits('handleRouter', _tabList.value[0].name)
}
//下拉菜单dom
const dropdown = ref()
//打开下拉菜单并重新定位
const openContextMenu = (e: { x: number; y: number; }) => {
  dropdown.value.handleClose()
  setTimeout(() => {
    dropdown.value.$el.style.left = `${e.x}px`
    dropdown.value.$el.style.top = `${e.y}px`
    dropdown.value.handleOpen()
  }, 50)
}

//点击tab跳转路由
const handleClick = (tab: TabsPaneContext) => {
  emits('handleRouter', tab.paneName)
}
//点击下拉菜单中的菜单
const handleCommand = (command: string | number | object) => {
  switch (command) {
    case 'a':
      closeItem()
      break
    case 'b':
      closeOther()
      break
    case 'c':
      closeLeft()
      break
    case 'd':
      closeRight()
      break
    case 'e':
      closeAll()
      break
  }
}

const content = reactive<any>({
  closeWarn: {
    zhCn: '工作台不能关闭',
    en: 'Table cannot be closed',
  },
  closeCurrent: {
    zhCn: '关闭当前',
    en: 'Close current',
  },
  closeOther: {
    zhCn: '关闭其他',
    en: 'Close other',
  },
  closeLeft: {
    zhCn: '关闭左侧',
    en: 'Close left',
  },
  closeRight: {
    zhCn: '关闭右侧',
    en: 'Close right',
  },
  closeAll: {
    zhCn: '全部关闭',
    en: 'Close all',
  }
})
</script>

<template>
  <div class="fast-nav">
    <el-tabs
        v-model="_activeName"
        class="tabs"
        closable
        type="card"
        @tab-click="handleClick"
        @contextmenu.prevent.native="openContextMenu($event)"
        @tab-remove="removeTab"
    >
      <el-tab-pane
          v-for="item in _tabList"
          :key="item.name"
          :name="item.name"
      >
        <template #label>
          <el-space>
            <el-icon style="font-size: 18px">
              <component :is="item.menuIcon" class="el-icon"/>
            </el-icon>
            <span>{{ language === 'zhCn' ? item.title : item.titleEn }}</span>
          </el-space>
        </template>
      </el-tab-pane>
    </el-tabs>
    <el-dropdown ref="dropdown" style="position: absolute" trigger="contextmenu" @command="handleCommand">
      <span/>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="a" icon="CircleClose">{{ content.closeCurrent[language] }}</el-dropdown-item>
          <el-dropdown-item command="b" icon="CircleCloseFilled">{{ content.closeOther[language] }}</el-dropdown-item>
          <el-dropdown-item command="c" icon="Back">{{ content.closeLeft[language] }}</el-dropdown-item>
          <el-dropdown-item command="d" icon="Right">{{ content.closeRight[language] }}</el-dropdown-item>
          <el-dropdown-item command="e" icon="DeleteFilled">{{ content.closeAll[language] }}</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<style lang="scss" scoped>
.fast-nav {
  .tabs:deep(.el-tabs__header) {
    margin: 0;

    .el-tabs__nav {
      background-color: var(--el-bg-color);
    }

    .el-tabs__item:not(.is-active) {
      border-bottom-color: var(--el-border-color);
    }
  }
}
</style>
