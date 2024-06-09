<script lang="ts" setup>
import RecursiveMenu from 've-recursive-menu/index.vue'
import VeSearchSelect from './ve-search-select/index.vue'
import {MenuInfoShowVo} from './MenuInfoShowVo.ts'
import {ElImage, ElMenu, ElScrollbar, ElSpace} from 'element-plus'
import 'element-plus/es/components/scrollbar/style/css'
import 'element-plus/es/components/menu/style/css'
import {onMounted, PropType, reactive, ref, watch} from "vue";
import 'element-plus/es/components/image/style/css'
import 'element-plus/es/components/space/style/css'
import {SearchOptions} from "./ve-search-select/SearchOptions.ts";

const props = defineProps({
  menu: {
    type: Array<MenuInfoShowVo>,
    required: true
  },
  sidebar: {
    type: Boolean,
    required: false,
    default: () => false
  },
  defaultActive: {
    type: String,
    required: true
  },
  layout: {
    type: Number as PropType<1 | 2 | 3 | 4 | 5 | 6 | 7>,
    required: false,
    default: () => 7
  },
  language: {
    type: String as PropType<'zhCn' | 'en'>,
    required: false,
    default: () => 'zhCn'
  },
  logo: {
    type: String,
    required: false,
    default: () => ''
  },
  name: {
    type: String,
    required: false,
    default: () => ''
  }
})

onMounted(() => {
  setOption()
})

let _options = reactive<SearchOptions[]>([])
//设置下拉值
const setOption = () => {
  props.menu.forEach((val: MenuInfoShowVo) => {
    const group = {
      label: val.menuName,
      labelEn: val.menuNameEn,
      options: <SearchOptions[]>[]
    }
    if (val.children) {
      group.options = val.children.map(item => {
        return {
          value: item.menuCode,
          label: item.menuName,
          labelEn: item.menuNameEn
        }
      })
    }
    _options.push(group)
  })
}

const emits = defineEmits(['handleActiveChange', 'handleShow'])

const _defaultActive = ref(props.defaultActive)

watch(() => props.defaultActive, () => {
  _defaultActive.value = props.defaultActive
})

const handleActiveChange = (index: string) => {
  _defaultActive.value = index
  emits('handleActiveChange', index)
}

const handleShow = () => {
  emits('handleShow', true)
}

</script>

<template>
  <div class="aside noSelect">
    <div v-show="[3,6,7].includes(layout)" class="aside-logo">
      <el-space class="logo">
        <el-image :src="logo"/>
        <strong v-show="!sidebar" class="logo-text">{{ name }}</strong>
      </el-space>
    </div>
    <ve-search-select
        :language="language"
        :options="_options"
        :selected="_defaultActive"
        :show="!sidebar"
        @handle-change="handleActiveChange"
        @handle-show="handleShow"
    />
    <el-scrollbar :class="[4, 5].includes(layout)? 'menu':[3].includes(layout)? 'menu2':'menu1'">
      <el-menu :collapse="sidebar"
               :default-active="_defaultActive"
               class="el-menu-vertical"
               router
               unique-opened
               @select="handleActiveChange">
        <recursive-menu :language="language" :menu-data="menu"/>
      </el-menu>
    </el-scrollbar>
  </div>

</template>

<style lang="scss" scoped>
.aside {
  height: 100%;

  .logo {
    .el-image {
      height: 40px;
      width: 40px;
    }

    .logo-text {
      width: 200px;
      font-size: 20px;
    }
  }

  //禁止选中
  .noSelect {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .aside-logo {
    height: 59px;
    padding: 0 8px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--el-border-color);
  }

  .el-menu {
    border-right: none;
  }

  //左右布局菜单高度
  .menu {
    height: calc(100% - 56px);
  }

  //上下布局菜单高度
  .menu1 {
    height: calc(100% - 116px);
  }

  .menu2 {
    height: calc(100% - 170px);
  }

  .el-menu-vertical:not(.el-menu--collapse) {
    width: 260px;
  }

  .horizontal-collapse-transition {
    transition: 150ms width ease-in-out, 150ms padding-left ease-in-out,
    150ms padding-right ease-in-out;
  }
}
</style>
