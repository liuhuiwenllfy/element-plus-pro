import {Ref, ref, watch} from 'vue'
import {store} from '@/vuex/store'
import {pageHeight} from '@/assets/js/pageHeight'
//初始化menuTree高度
const search = ref()
export const initMenuHeight = (searchRef: Ref<HTMLElement>) => {
  search.value = searchRef.value
  getMenuHeight()
  window.addEventListener('resize', () => {
    getMenuHeight()
  })
}
//监听globalSize（全局尺寸）变化重新计算menuTree高度
watch(() => store.state.globalSize, () => {
  getMenuHeight()
})
//监听fullScreen（全屏）变化重新计算高度
watch(() => store.state.fullScreen, () => {
  getMenuHeight()
})
//侧边栏展开收起计算menuTree高度
watch(() => store.state.sidebar, () => {
  getMenuHeight()
})
//监听页面高度计算menuTree高度
watch(() => pageHeight, () => {
  getMenuHeight()
})
//menuTree高度参数
export const menuHeight = ref(0)
//偏移量参数（自定义menuTree页面可以重新设置偏移量）
const offset = ref(38)
//计算menuTree高度函数（如果页面上有其他元素可以自行添加逻辑）
export const getMenuHeight = () => {
  setTimeout(() => {
    menuHeight.value = pageHeight.value - search.value.$el.clientHeight - offset.value
  }, 150)
  window.removeEventListener('resize', () => {
  })
}
