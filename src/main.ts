import {createApp} from 'vue'
import 'element-plus/theme-chalk/dark/css-vars.css'

// 统一导入 element 图标
import * as Icons from '@element-plus/icons-vue'
import 'element-plus/theme-chalk/el-message.css'
import 'element-plus/theme-chalk/el-message-box.css'

//导入路由
import router from '@/router/index'
//国际化
import i18n from '@/locales/index'
//响应式布局工具
import {responsive} from '@/assets/js/responsive'

// @ts-ignore
import App from './App.vue'
import {key, store} from './vuex/store'

const app = createApp(App);

// 注册全局 element-icons 组件
Object.keys(Icons).forEach((key) => {
    app.component(key, Icons[key as keyof typeof Icons])
})

app.use(store, key)
app.use(router)
app.use(i18n)
app.use(responsive)
app.mount('#app')
