import {createApp} from 'vue'
import App from './App.vue'
import 'element-plus/theme-chalk/dark/css-vars.css'
import {createPinia} from 'pinia'
import router from '@/router/index'
import {useCommonStore} from '@/pinia/common.ts';
import {createI18n} from "vue-i18n";
import zhCn from "@/locales/zhCn.ts";
import en from "@/locales/en.ts";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const pinia = createPinia()

const commonStore = useCommonStore(pinia);

const app = createApp(App)
app.use(pinia)
app.use(router)
const i18n = createI18n({
    legacy: false,
    locale: commonStore.locale,
    messages: {
        zhCn,
        en
    }
});

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(i18n)
app.mount('#app')
