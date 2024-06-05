import {createRouter, createWebHashHistory, RouteLocationNormalized} from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import menuList from '@/api/json/menuList.json'
import {useCommonStore} from "@/pinia/common.ts";
import {MenuInfoShowVo} from "@/entity/vo/MenuInfoShowVo.ts";

const commonStore = useCommonStore()

const modules = import.meta.glob('/src/view/*/*/index.vue')
const routes: Array<any> = [
    {
        path: '/',
        name: '',
        redirect: 'workbench',
    },
    {
        path: '/index',
        name: 'index',
        redirect: 'workbench',
        component: () => import('@/view/index/index.vue'),
        children: []
    },
]
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    // history: createWebHistory('vite'),
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
    scrollBehavior(to: RouteLocationNormalized, from: RouteLocationNormalized, savedPosition: ScrollOptions) {
        return {left: 0, top: 0} // 将滚动条位置重置为顶部
    }
})

let refresh = true


router.beforeEach(async (to, from, next) => {
    NProgress.start()
    if (commonStore.menuData.length === 0 || refresh) {
        refresh = false
        await setMenuList()
        return next({...to, replace: true})
    } else
        //判断当前路由是否存在
    if (router.hasRoute(to.name)) {
        //快速导航添加
        commonStore.changeTabList('tabList', to).then()
        return next()
    } else {
        return next({name: '404'})
    }
})
router.afterEach(() => {
    NProgress.done()
})

export const setMenuList = async () => {
    // 动态路由集合
    let menuData = menuList
    commonStore.changeMenuData('menuData', menuData)
    for (const item of menuData) {
        await addRoute(item)
    }
}
const addRoute = async (item: MenuInfoShowVo) => {
    if (item.children && item.children.length > 0) {
        for (const item1 of item.children) {
            await addRoute(item1)
        }
    } else {
        router.addRoute('index', {
            path: item.menuPath,
            name: item.menuCode,
            component: modules[`/src/view/${item.menuComponent}/index.vue`],
            meta: {
                name: item.menuName,
                nameEn: item.menuNameEn,
                icon: item.menuIcon,
                hasBtnPermission: item.hasBtnPermission
            }
        })
    }
}

export default router
