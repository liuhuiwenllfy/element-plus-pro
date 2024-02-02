import {createRouter, createWebHashHistory, RouteLocationNormalized} from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const routes: Array<any> = [
    {
        path: '/index',
        name: 'index',
        redirect: 'workbench',
        // @ts-ignore
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


router.beforeEach(async (to, from, next) => {
    NProgress.start()
    return next()
})
router.afterEach(() => {
    NProgress.done()
})

export default router
