import {createRouter, createWebHistory} from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import menuList from '@/api/json/menuList.json'
import {MenuInfoShowVo} from "@/entity/vo/MenuInfoShowVo.ts";

const modules = import.meta.glob('/src/view/*/*/index.vue')
const routes: any[] = [
    {
        path: '/',
        name: '',
        redirect: 'index',
    },
    {
        path: '/index',
        name: 'index',
        redirect: 'overview',
        component: () => import('@/view/index/index.vue'),
        children: []
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return {left: 0, top: 0}
    }
})
router.beforeEach((to, _from) => {
    NProgress.start()
    if (!router.hasRoute(<string>to.path.replace("/", ""))) {
        addRoute(<any>menuList)
        if (!router.hasRoute(<string>to.path.replace("/", ""))) {
            return {name: '404'}
        }
        return to.fullPath
    }
})

router.afterEach(() => {
    NProgress.done()
})

const addRoute = (list: MenuInfoShowVo[]) => {
    for (const item of list) {
        if (item.children.length > 0) {
            addRoute(item.children)
        } else {
            router.addRoute('index', {
                path: item.menuPath,
                name: item.menuCode,
                component: modules[`/src/view/${item.menuComponent}/index.vue`],
                meta: {
                    code: item.menuCode,
                    name: item.menuName,
                    nameEn: item.menuNameEn,
                    icon: item.menuIcon,
                    hasBtnPermission: item.hasBtnPermission
                },
                children: []
            })
        }
    }
}


export default router
