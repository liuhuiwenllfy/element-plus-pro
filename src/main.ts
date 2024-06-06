import {createApp} from 'vue'
import App from './App.vue'
import 'element-plus/theme-chalk/dark/css-vars.css'
import {createPinia} from 'pinia'

const pinia = createPinia()
import router from '@/router/index'
// import i18n from '@/locales/index'
// 使用 Pinia 之后再导入 store 并获取 locale
import { useCommonStore } from '@/pinia/common.ts';
import {createI18n} from "vue-i18n";
import zhCn from "@/locales/zhCn.ts";
import en from "@/locales/en.ts";
const commonStore = useCommonStore(pinia);

const app = createApp(App)
app.use(pinia)
app.use(router)
// 实例化 I18n
const i18n = createI18n({
    legacy: false,
    locale: commonStore.locale, // 初始化配置语言
    messages: {
        zhCn,
        en
    }
});

app.use(i18n)
app.mount('#app')
