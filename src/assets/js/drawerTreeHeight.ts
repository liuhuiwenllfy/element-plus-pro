import { Ref, ref, watch } from 'vue'
import { store } from '@/vuex/store'
//初始化 drawerTreeHeight 高度
const search = ref()
export const initDrawerTreeHeight = (searchRef: Ref<HTMLElement>) => {
  search.value = searchRef.value
  getDrawerTreeHeight()
  window.addEventListener('resize', () => {
    getDrawerTreeHeight()
  })
}
//监听globalSize（全局尺寸）变化重新计算 drawerTreeHeight 高度
watch(() => store.state.globalSize, () => {
  getDrawerTreeHeight()
})
//监听fullScreen（全屏）变化重新计算高度
watch(() => store.state.fullScreen, () => {
  getDrawerTreeHeight()
})
//侧边栏展开收起计算 drawerTreeHeight 高度
watch(() => store.state.sidebar, () => {
  getDrawerTreeHeight()
})
//drawerTreeHeight 高度参数
export const drawerTreeHeight = ref(0)
//偏移量参数（自定义 drawerTreeHeight 页面可以重新设置偏移量）
const offset = ref(176)
//计算 drawerTreeHeight 高度函数（如果页面上有其他元素可以自行添加逻辑）
export const getDrawerTreeHeight = () => {
  setTimeout(() => {
    drawerTreeHeight.value = document.body.clientHeight - search.value.$el.clientHeight - offset.value
  }, 150)
  window.removeEventListener('resize', () => {
  })
}
