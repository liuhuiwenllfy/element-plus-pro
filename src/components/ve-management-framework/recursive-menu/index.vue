<script lang="ts" setup>
import RecursiveMenu from '@/components/ve-management-framework/recursive-menu/index.vue'
import {useStore} from '@/vuex/store'
import {MenuInfoShowVo} from '@/entity/vo/system/MenuInfoShowVo'

const store = useStore()

const props = defineProps({
  menuData: {
    type: Array as () => Array<MenuInfoShowVo>,
    required: true,
    default: () => []
  }
})
const handleClick = (e: any) => {
  store.commit('defaultActive', e.index)
}
</script>

<template>
  <template v-for="(item, index) of props.menuData" :key="index">
    <el-sub-menu v-if="item.children.length > 0" :hide-timeout="100" :index="item.menuCode" :show-timeout="100">
      <template #title>
        <component :is="item.menuIcon" class="el-icon"/>
        <span>{{ store.state.internationalization === 'zhCn' ? item.menuName : item.menuNameEn }}</span>
      </template>
      <RecursiveMenu :menu-data="item.children"/>
    </el-sub-menu>
    <el-menu-item v-else :index="item.menuCode" @click="handleClick">
      <component :is="item.menuIcon" class="el-icon"/>
      {{ store.state.internationalization === 'zhCn' ? item.menuName : item.menuNameEn }}
    </el-menu-item>
  </template>
</template>

<style lang="less" scoped>
.el-icon {
  font-size: 16px;
}
</style>
