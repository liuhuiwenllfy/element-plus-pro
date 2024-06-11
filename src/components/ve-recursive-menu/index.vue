<script lang="ts" setup>
import RecursiveMenu from './index.vue'
import {MenuInfoShowVo} from './MenuInfoShowVo.ts'
import {ElMenuItem, ElSubMenu} from 'element-plus'
import 'element-plus/es/components/menu-item/style/css'
import 'element-plus/es/components/sub-menu/style/css'
import {PropType} from "vue";

const props = defineProps({
  menuData: {
    type: Array as () => Array<MenuInfoShowVo>,
    required: true,
    default: () => []
  },
  language: {
    type: String as PropType<'zhCn' | 'en' | string>,
    required: false,
    default: () => 'zhCn'
  },
})

const emits = defineEmits(['defaultActive'])
const handleClick = (e: any) => {
  emits('defaultActive', e.index)
}
</script>

<template>
  <template v-for="item in props.menuData" :key="item.id">
    <el-sub-menu v-if="item.children.length > 0" :hide-timeout="100" :index="item.menuCode" :show-timeout="100">
      <template #title>
        <component :is="item.menuIcon" class="el-icon"/>
        <span>{{ language === 'zhCn' ? item.menuName : item.menuNameEn }}</span>
      </template>
      <RecursiveMenu :language="language" :menu-data="item.children"/>
    </el-sub-menu>
    <el-menu-item v-else :index="item.menuCode" @click="handleClick">
      <component :is="item.menuIcon" class="el-icon"/>
      {{ language === 'zhCn' ? item.menuName : item.menuNameEn }}
    </el-menu-item>
  </template>
</template>

<style lang="scss" scoped>
.el-icon {
  font-size: 16px;
}
</style>
