<script lang="ts" setup>
import RecursiveMenu from '@/components/ve-management-framework/recursive-menu/index.vue'
import {v4 as uuidv4} from 'uuid'
import {computed, onMounted, reactive, watch} from 'vue'
import {useStore} from '@/vuex/store'
import {useRouter} from 'vue-router'
import {More} from '@element-plus/icons-vue'

const store = useStore()
const router = useRouter()

const data = reactive({
  menuData: [],
  show: false,
  maxSize: 0
})
const menuData = computed(() => {
  data.menuData = store.state.menuData
  return store.state.menuData
})
watch(menuData, () => {
  maxMenuSize()
})
onMounted(() => {
  maxMenuSize()
  window.addEventListener('resize', () => {
    maxMenuSize()
  })
})
const maxMenuSize = () => {
  const menuWidth = document.body.clientWidth - 829

  const itemWidthList = []
  let itemWidthSum = 0
  for (let i = 0; i < data.menuData.length; i++) {
    const canvas = document.createElement('canvas')
    let context = canvas.getContext('2d')
    context.font = '14px "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "\\5fae\\8f6f\\96c5\\9ed1", Arial, sans-serif'
    const metrics = context.measureText(store.state.internationalization === 'en' ? data.menuData[i].menuNameEn : data.menuData[i].menuName)
    const itemWidth = metrics.width + 93
    itemWidthList.push(itemWidth)
    itemWidthSum += itemWidth
  }
  let currentWidth = 0
  data.maxSize = 0
  itemWidthList.forEach(item => {
    currentWidth += item
    if ((currentWidth + (itemWidthSum > menuWidth ? 93 : 0)) < menuWidth) {
      data.maxSize += 1
    }
  })
  window.removeEventListener('resize', () => {
  })
}
</script>

<template>
  <div class="menu">
    <el-menu
        :default-active="String(router.currentRoute.value.name)"
        :ellipsis="false"
        mode="horizontal"
        router>
      <recursive-menu :menu-data="data.menuData.slice(0,data.maxSize)"/>
      <el-sub-menu v-if="data.menuData.length > 1 && data.menuData.length > data.maxSize" :index="uuidv4()">
        <template #title>
          <el-icon>
            <More/>
          </el-icon>
        </template>
        <recursive-menu :menu-data="data.menuData.slice(data.maxSize)"/>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<style lang="less" scoped>
.menu {
  display: inline-block;

  .el-menu {
    height: 59px;
    float: left;
    border-bottom: none;
  }
}
</style>
