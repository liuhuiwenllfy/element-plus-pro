<script lang="ts" setup>
import {Back, CircleClose, CircleCloseFilled, DeleteFilled, Right} from '@element-plus/icons-vue'
import type {TabsPaneContext} from 'element-plus'
import {ElMessage} from 'element-plus'
import {ref} from 'vue'
import {useRouter} from 'vue-router'
import {useStore} from '@/vuex/store'

const store = useStore();

const tabList = ref(store.state.tabList)

//关闭指定tab
const removeTab = (targetName: string) => {
  //首页不能关闭
  if (targetName === tabList.value[0].name) {
    return ElMessage.warning('工作台不能关闭 ！！！')
  }
  //获取路由下标
  const index = tabList.value.findIndex(item => item.name === router.currentRoute.value.name)
  //获取当前选中的tab下标
  const current = tabList.value.findIndex(item => item.name === targetName)
  //删除当前选中tab
  tabList.value.splice(current, 1);
  //判断当前下标和路由下标是否相同，是->跳转前一位路由
  if (index === current) {
    router.push(tabList.value[index - 1].name)
  }
}
//关闭当前tab
const closeItem = () => {
  if (router.currentRoute.value.name === tabList.value[0].name) {
    return ElMessage.warning('工作台不能关闭 ！！！')
  }
  //获取路由下标
  const index = tabList.value.findIndex(item => item.name === router.currentRoute.value.name)
  //获取当前选中的tab下标
  tabList.value.splice(index, 1);
  //跳转前一位路由
  router.push(tabList.value[index - 1].name)
}
//关闭其他tab
const closeOther = () => {
  //获取路由下标
  const index = tabList.value.findIndex(item => item.name === router.currentRoute.value.name)
  //下表是否为0，是->删除0之后的所有数据
  if (index === 0) {
    tabList.value.splice(1);
  }
  //下表是否为1且集合长度大于2
  if (index === 1 && tabList.value.length > 2) {
    tabList.value.splice(2);
  }
  //下表大于1
  if (index > 1) {
    tabList.value.splice(1, index - 1);
    tabList.value.splice(2);
  }
}
//关闭左侧tab
const closeLeft = () => {
  //获取路由下标
  const index = tabList.value.findIndex(item => item.name === router.currentRoute.value.name)
  //判断下表是否大于1
  if (index > 1) {
    tabList.value.splice(1, index - 1);
  }
}
//关闭右侧tab
const closeRight = () => {
  //获取路由下标
  const index = tabList.value.findIndex(item => item.name === router.currentRoute.value.name)
  //判断下表是否小于总长度
  if (index < tabList.value.length - 1) {
    tabList.value.splice(index, tabList.value.length - index);
  }
}
//关闭所有tab
const closeAll = () => {
  //判断总长度是否大于1
  if (tabList.value.length > 1) {
    tabList.value.splice(1);
  }
  //跳转首页
  router.push(tabList.value[0].name)
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
const router = useRouter();
//点击tab跳转路由
const handleClick = (tab: TabsPaneContext) => {
  router.push(tab.paneName.toString())
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
</script>

<template>
  <div class="fast-nav">
    <el-tabs
        v-model="router.currentRoute.value.name"
        class="tabs"
        closable
        type="card"
        @tab-click="handleClick"
        @contextmenu.prevent.native="openContextMenu($event)"
        @tab-remove="removeTab">
      <el-tab-pane
          v-for="item in tabList"
          :key="item.name"
          :name="item.name">
        <template #label>
          <el-space>
            <el-icon style="font-size: 18px">
              <component :is="item.menuIcon" class="el-icon"/>
            </el-icon>
            <span>{{ store.state.internationalization === 'zhCn' ? item.title : item.titleEn }}</span>
          </el-space>
        </template>
      </el-tab-pane>
    </el-tabs>
    <el-dropdown ref="dropdown" style="position: absolute" trigger="contextmenu" @command="handleCommand">
      <span/>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item :icon="CircleClose" command="a">{{ $t('message.closeCurrent') }}</el-dropdown-item>
          <el-dropdown-item :icon="CircleCloseFilled" command="b">{{ $t('message.closeOther') }}</el-dropdown-item>
          <el-dropdown-item :icon="Back" command="c">{{ $t('message.closeLeft') }}</el-dropdown-item>
          <el-dropdown-item :icon="Right" command="d">{{ $t('message.closeRight') }}</el-dropdown-item>
          <el-dropdown-item :icon="DeleteFilled" command="e">{{ $t('message.closeAll') }}</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<style lang="less" scoped>
.fast-nav {
  .tabs:deep(.el-tabs__header) {
    margin: 0;

    .el-tabs__nav {
      background-color: @base-background;
    }

    .el-tabs__item:not(.is-active) {
      border-bottom-color: @base-border;
    }
  }
}
</style>
