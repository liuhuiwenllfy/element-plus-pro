import {createApp} from 'vue'
import App from './App.vue'
import 'element-plus/theme-chalk/dark/css-vars.css'
import {createPinia} from 'pinia'
import router from '@/router/index'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import i18n from "@/locales";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import * as SvgList from '@/components/ve-icon/components'
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

// 注册全局 ve-icon 组件
Object.keys(SvgList).forEach((key) => {
    app.component(key, SvgList[key as keyof typeof SvgList])
})

app.use(i18n)
app.mount('#app')

