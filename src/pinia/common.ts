import {defineStore} from 'pinia'
import {MenuInfoShowVo} from "../entity/vo/MenuInfoShowVo.ts";

export const useCommonStore = defineStore('common', {
    state: () => {
        return {
            name: 'CodeEase',
            layout: 7,
            dark: true,
            sidebar: false,
            fullScreen: false,
            globalSize: 'default',
            locale: 'zhCn',
            defaultActive: 'workbench',
            tabList: [
                {
                    title: '工作台',
                    titleEn: 'Workbench',
                    name: 'workbench',
                    menuIcon: 'Odometer'
                }
            ],
            menuData: [] as MenuInfoShowVo[],
            fullscreenLoading: false,
            loading: false,
        }
    },
    getters: {
        getName(state) {
            return state.name
        },
        getLayout(state) {
            return state.layout
        },
        getDark(state) {
            return state.dark
        },
        getSidebar(state) {
            return state.sidebar
        },
        getFullScreen(state) {
            return state.fullScreen
        },
        getGlobalSize(state) {
            return state.globalSize
        },
        getLocale(state) {
            return state.locale
        },
        getDefaultActive(state) {
            return state.defaultActive
        },
        getTabList(state) {
            return state.tabList
        },
        getMenuData(state) {
            return state.menuData
        },
        getFullscreenLoading(state) {
            return state.fullscreenLoading
        },
        getLoading(state) {
            return state.loading
        }
    },
    actions: {
        changName(param) {
            this.name = param
        },
        changLayout(param) {
            this.layout = param
        },
        changDark(param) {
            this.dark = param
        },
        changeSidebar(param) {
            this.sidebar = param
        },
        changeFullScreen(param) {
            this.fullScreen = param
        },
        changeGlobalSize(param) {
            this.globalSize = param
        },
        changeLocale(param) {
            this.locale = param
        },
        changeDefaultActive(param) {
            this.defaultActive = param
        },
        changeTabList(param) {
            const tabList = this.tabList
            if (tabList.findIndex(item => item.name === param.name) === -1) {
                const item = {
                    title: param.meta.name,
                    titleEn: param.meta.nameEn,
                    name: param.name,
                    menuIcon: param.meta.icon
                }
                tabList.push(item);
            }
        },
        changeMenuData(param) {
            this.menuData = param
        },
        changeFullscreenLoading(param) {
            this.fullscreenLoading = param
        },
        changeLoading(param) {
            this.loading = param
        }
    }
})
