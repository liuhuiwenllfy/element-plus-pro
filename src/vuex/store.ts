import {InjectionKey} from 'vue'
import {createStore, Store, useStore as baseUseStore} from 'vuex'
import {MenuInfoShowVo} from '@/entity/vo/system/MenuInfoShowVo'
import createPersistedState from 'vuex-persistedstate';

// 为 store state 声明类型
export interface State {
    name: String, //项目名称
    layout: number, //布局
    drawer: boolean, //侧边工具栏
    drawerNews: boolean, //侧边工具栏
    dark: boolean, //夜间模式
    sidebar: boolean, //侧边栏开关
    showAsideLogo: boolean, //侧边logo显示
    showAsideSearch: boolean, //侧边栏搜索显示
    fullScreen: boolean, //全屏开关
    globalSize: String, //全局尺寸
    internationalization: String, //国际化
    defaultActive: String, //默认选中菜单
    tabList: Array<any>, //快速导航集合
    menuData: Array<MenuInfoShowVo>, //菜单数据
    encrypt: boolean, //信息是否已经AES加密
    fullscreenLoading: boolean, //全屏加载样式
    loading: boolean, //按钮加载样式
    isNews: Boolean, //是否有未读消息
    responsiveLayout: String, //响应式布局
    fullSiteSearch: string, //全站搜索信息缓存
}

// 定义 injection key
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
    plugins: [createPersistedState({storage: window.localStorage})],
    state: {//仓库
        name: 'CodeEase',
        layout: 7,
        drawer: false,
        drawerNews: false,
        dark: false,
        sidebar: false,
        showAsideLogo: true,
        showAsideSearch: true,
        fullScreen: false,
        globalSize: 'default',
        internationalization: 'zhCn',
        defaultActive: 'workbench',
        tabList: [
            {
                title: '工作台',
                titleEn: 'Workbench',
                name: 'workbench',
                menuIcon: 'Odometer'
            }
        ],
        menuData: [],
        // @ts-ignore
        encrypt: import.meta.env.VITE_ENCRYPT === 'true',
        fullscreenLoading: false,
        loading: false,
        isNews: false,
        responsiveLayout: 'default',
        fullSiteSearch: ''
    },
    getters: {//根据条件过滤仓库中的参数
        layout(state) {
            return state.layout
        },
        drawer(state) {
            return state.drawer
        },
        drawerNews(state) {
            return state.drawer
        },
        dark(state) {
            return state.dark
        },
        sidebar(state) {
            return state.sidebar
        },
        showAsideLogo(state) {
            return state.showAsideLogo
        },
        showAsideSearch(state) {
            return state.showAsideSearch
        },
        fullScreen(state) {
            return state.fullScreen
        },
        globalSize(state) {
            return state.globalSize
        },
        internationalization(state) {
            return state.internationalization
        },
        defaultActive(state) {
            return state.defaultActive
        },
        tabList(state) {
            return state.tabList
        },
        menuData(state) {
            return state.menuData
        },
        encrypt(state) {
            return state.encrypt
        },
        fullscreenLoading(state) {
            return state.fullscreenLoading
        },
        loading(state) {
            return state.loading
        },
        isNews(state) {
            return state.isNews
        },
        responsiveLayout(state) {
            return state.responsiveLayout
        },
        fullSiteSearch(state) {
            return state.fullSiteSearch
        }
    },
    mutations: {//提交携带参数
        layout(state, n) {
            state.layout = n
        },
        drawer(state, n) {
            state.drawer = n
        },
        drawerNews(state, n) {
            state.drawerNews = n
        },
        dark(state, n) {
            state.dark = n
        },
        sidebar(state, n) {
            state.sidebar = n
        },
        showAsideLogo(state, n) {
            state.showAsideLogo = n
        },
        showAsideSearch(state, n) {
            state.showAsideSearch = n
        },
        fullScreen(state, n) {
            state.fullScreen = n
        },
        globalSize(state, n) {
            state.globalSize = n
        },
        internationalization(state, n) {
            state.internationalization = n
        },
        defaultActive(state, n) {
            state.defaultActive = n
        },
        tabList(state, n) {
            state.tabList = n
        },
        menuData(state, n) {
            state.menuData = n
        },
        encrypt(state, n) {
            state.encrypt = n
        },
        fullscreenLoading(state, n) {
            state.fullscreenLoading = n
        },
        loading(state, n) {
            state.loading = n
        },
        isNews(state, n) {
            state.isNews = n
        },
        responsiveLayout(state, n) {
            state.responsiveLayout = n
        },
        fullSiteSearch(state, n) {
            state.fullSiteSearch = n
        }
    },
    actions: {
        drawer(context) {
            context.commit('drawer', context)
        },
        drawerNews(context) {
            context.commit('drawerNews', context)
        },
        sidebar(context) {
            context.commit('sidebar', !context.state.sidebar)
            if ([1, 2, 3, 6, 7].includes(context.state.layout)) {
                if (!context.state.showAsideLogo) {
                    setTimeout(() => {
                        context.commit('showAsideLogo', !context.state.showAsideLogo)
                    }, 150)
                } else {
                    context.commit('showAsideLogo', !context.state.showAsideLogo)
                }
            }
            if (!context.state.showAsideSearch) {
                setTimeout(() => {
                    context.commit('showAsideSearch', !context.state.showAsideSearch)
                }, 150)
            } else {
                context.commit('showAsideSearch', !context.state.showAsideSearch)

            }
        },
        fullScreen(context) {
            context.commit('fullScreen', !context.state.fullScreen)
        },
        loading(context) {
            context.commit('loading', !context.state.loading)
        },
        tabList(context, param) {
            const tabList = context.state.tabList
            if (tabList.findIndex(item => item.name === param.name) === -1) {
                const item = {
                    title: param.meta.name,
                    titleEn: param.meta.nameEn,
                    name: param.name,
                    menuIcon: param.meta.icon
                }
                tabList.push(item);
            }
        }
    }
})

// 定义自己的 `useStore` 组合式函数
export function useStore() {
    return baseUseStore(key)
}
