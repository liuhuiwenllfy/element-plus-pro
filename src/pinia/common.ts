import {defineStore} from 'pinia'
import {MenuInfoShowVo} from "@/entity/vo/MenuInfoShowVo.ts";

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
            drawer: false,
            drawerNews: false,
            newsNum: 0
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
        },
        getDrawer(state) {
            return state.drawer
        },
        getDrawerNews(state) {
            return state.drawerNews
        },
        getNewsNum(state) {
            return state.newsNum
        }
    },
    actions: {
        changName(param: string) {
            this.name = param
        },
        changLayout(param: number) {
            this.layout = param
        },
        changDark(param: boolean) {
            this.dark = param
        },
        changeSidebar(param: boolean) {
            this.sidebar = param
        },
        changeFullScreen(param: boolean) {
            this.fullScreen = param
        },
        changeGlobalSize(param: string) {
            this.globalSize = param
        },
        changeLocale(param: string) {
            this.locale = param
        },
        changeDefaultActive(param: string) {
            this.defaultActive = param
        },
        changeTabList(param: any) {
            const tabList = this.tabList
            if (tabList.findIndex(item => item.name === param.code) === -1) {
                const item = {
                    title: param.name,
                    titleEn: param.nameEn,
                    name: param.code,
                    menuIcon: param.icon
                }
                tabList.push(item);
            }
        },
        changeMenuData(param: MenuInfoShowVo[]) {
            this.menuData = param
        },
        changeFullscreenLoading(param: boolean) {
            this.fullscreenLoading = param
        },
        changeLoading(param: boolean) {
            this.loading = param
        },
        changeDrawer(param: boolean) {
            this.drawer = param
        },
        changeDrawerNews(param: boolean) {
            this.drawerNews = param
        },
        changeNewsNum(param: number) {
            this.newsNum = param
        }
    }
})
