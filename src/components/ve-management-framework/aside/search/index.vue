<script lang="ts" setup>
import { computed, onMounted, reactive, ref, watch } from 'vue'
import { useStore } from '@/vuex/store'
import { RouteLocationRaw, useRoute, useRouter } from 'vue-router'
import { Search } from '@element-plus/icons-vue'

const router = useRouter();
const route = useRoute();

const store = useStore()
const value = ref('')
const data = reactive({
  options: []
})
//初始化
onMounted(() => {
  setOption()
})
//监听路由变化给select赋值
const routeName = computed(() => {
  return route.name
})
watch(routeName, () => {
  value.value = route.name.toString()
})
//监听select变化跳转路由
const handleChange = (val: RouteLocationRaw) => {
  router.push(val)
}
//设置下拉值
const setOption = () => {
  data.options = []
  store.state.menuData.forEach((val: any) => {
    const group = {
      label: val.menuName,
      labelEn: val.menuNameEn,
      options: []
    }
    if (val.children) {
      group.options = val.children.map((item: any) => {
        return {
          value: item.menuCode,
          label: item.menuName,
          labelEn: item.menuNameEn
        }
      })
    }
    data.options.push(group)
  });
  value.value = route.name.toString()
}
</script>

<template>
  <div class="aside-search">
    <div v-show="store.state.showAsideSearch" class="search">
      <el-select v-model="value"
                 :placeholder="$t('message.select')"
                 clearable
                 filterable
                 size="default"
                 @change="handleChange">
        <el-option-group v-for="group in data.options"
                         :key="group.label"
                         :label="store.state.internationalization === 'zhCn' ? group.label: group.labelEn">
          <el-option v-for="item in group.options"
                     :key="item.value"
                     :label="store.state.internationalization === 'zhCn' ? item.label: item.labelEn"
                     :value="item.value"/>
        </el-option-group>
      </el-select>
    </div>
    <div v-show="!store.state.showAsideSearch"
         class="search-icon"
         @click="store.dispatch('sidebar')">
      <el-icon>
        <Search/>
      </el-icon>
    </div>
  </div>
</template>

<style lang="less" scoped>
.aside-search {
  height: 55px;
  border-bottom: @solid;

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
