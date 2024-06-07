import {createI18n} from 'vue-i18n'
import zhCn from './zhCn'
import en from './en'
import {useCommonStore} from '@/pinia/common.ts'
import {createPinia} from "pinia";

const pinia = createPinia()

const commonStore = useCommonStore(pinia);

const i18n = createI18n({
    legacy: false,
    locale: commonStore.locale,
    messages: {
        zhCn,
        en
    }
})

export default i18n
