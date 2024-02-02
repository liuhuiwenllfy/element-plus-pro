<script lang="ts" setup>
import { useStore } from '@/vuex/store'
import RecursiveMenu from '@/components/ve-management-framework/recursive-menu/index.vue'
import Search from '@/components/ve-management-framework/aside/search/index.vue'
import Logo from '@/components/ve-management-framework/header/logo/index.vue'
import { onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const data = reactive({
  menuData: store.state.menuData,
})
onMounted(() => {
  data.menuData = store.state.menuData
})

</script>

<template>
  <div class="aside noSelect">
    <div v-show="[3,6,7].includes(store.state.layout)" class="aside-logo">
      <Logo/>
    </div>
    <Search/>
    <el-scrollbar :class="[4,5].includes(store.state.layout) ? 'menu':[3].includes(store.state.layout)?'menu2':'menu1'">
      <el-menu :collapse="store.state.sidebar"
               :default-active="String(router.currentRoute.value.name)"
               class="el-menu-vertical"
               router
               unique-opened>
        <recursive-menu :menu-data="data.menuData"/>
      </el-menu>
    </el-scrollbar>
  </div>

</template>

<style lang="less" scoped>
.aside {
  height: 100%;

  .aside-logo {
    border-bottom: @solid;
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
