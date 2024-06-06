import {createI18n} from 'vue-i18n' //引入vue-i18n组件
import zhCn from './zhCn'  // 中文语言包
import en from './en'  // 英文语言包
import {useCommonStore} from '@/pinia/common.ts'
const commonStore= useCommonStore()

// 实例化I18n
const i18n = createI18n({
    legacy: false,
    locale: commonStore.locale, // 初始化配置语言
    messages: {
        zhCn,
        en
    }
})

export default i18n
