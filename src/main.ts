import {createApp} from 'vue'
import App from './App.vue'
import 'element-plus/theme-chalk/dark/css-vars.css'
import {createPinia} from 'pinia'
import router from '@/router/index'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import i18n from "@/locales";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import * as AnimationSvgList from '@/components/ve-icon/svg-spinners/components'
import * as OtherSvgList from '@/components/ve-icon/other/components'
import * as MdiLightSvgList from '@/components/ve-icon/mdi-light/components'
import 'element-plus/theme-chalk/el-message.css'
import 'element-plus/theme-chalk/el-message-box.css'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)
app.use(pinia)
app.use(router)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

// 注册全局 ve-icon 组件（svg-spinners）
Object.keys(AnimationSvgList).forEach((key) => {
    app.component(key, AnimationSvgList[key as keyof typeof AnimationSvgList])
})
// 注册全局 ve-icon 组件（other）
Object.keys(OtherSvgList).forEach((key) => {
    app.component(key, OtherSvgList[key as keyof typeof OtherSvgList])
})
// 注册全局 ve-icon 组件（mdi-light）
Object.keys(MdiLightSvgList).forEach((key) => {
    app.component(key, MdiLightSvgList[key as keyof typeof MdiLightSvgList])
})

app.use(i18n)
app.mount('#app')

