//分页查询包装函数

import router from '@/router'
import {removeSession} from "@/assets/js/sessionStorageUtils";

export const setPageInfo = (form: any, e: any) => {
    if (e) {
        if (e['page']) {
            form.page = e['page']
        }
        if (e['pageSize']) {
            form.pageSize = e['pageSize']
        }
        if (e['prop']) {
            switch (e['order']) {
                case 'ascending':
                    form.ascs = e['prop']
                    form.descs = ''
                    break
                case 'descending':
                    form.ascs = ''
                    form.descs = e['prop']
                    break
                default:
                    form.ascs = ''
                    form.descs = ''
            }
        }
    }
}

//日期快捷选择
export const shortcuts = [
    {
        text: 'Last week',
        value: () => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - (3600 * 1000 * 24 * 7))
            return [start, end]
        },
    },
    {
        text: 'Last month',
        value: () => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - (3600 * 1000 * 24 * 30))
            return [start, end]
        },
    },
    {
        text: 'Last 3 months',
        value: () => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - (3600 * 1000 * 24 * 90))
            return [start, end]
        },
    },
]

// 防抖
export const debounce = (func: () => void, delay: number) => {
    let timer: ReturnType<typeof setTimeout>
    return function () {
        clearTimeout(timer)
        timer = setTimeout(func, delay)
    }
}

//路由跳转
export const routerPushOfName = (name: string, query = {}) => {
    if (name.indexOf('http') != -1) {
        window.open(name)
    } else {
        router.push({name: name, query: query}).then(r => {
        })
    }
}

//地址跳转
export const openUrl = (url: string) => {
    window.open(url)
}

// 退出登录
export const redirectLogin = () => {
    removeSession('menu_data')
    removeSession('user_info')
    removeSession('tenant')
    removeSession('token')
}

export const convertBytesToKbOrMb = (b: number) => {
    const mb = 1024 * 1024
    const kb = 1024
    if (b > mb) {
        return `${(b / mb).toFixed(2)}mb`
    } else if (b > kb && b < mb) {
        return `${(b / kb).toFixed(2)}kb`
    } else {
        return `${(b).toFixed(2)}B`
    }
}

export const spliceMongodbUrl = (url: string) => {
    if (url) {
        //@ts-ignore
        return `${import.meta.env.VITE_CLIENT_URL}${import.meta.env.VITE_GRIDFSFILE_URL}${url}`
    } else {
        return '/img/default.png'
    }
}

//地址跳转
export const openCurrentUrl = (url: string, data = {}) => {
    const params = new URLSearchParams(Object.entries(data));
    //@ts-ignore
    window.open(`${import.meta.env.VITE_CLIENT_URL}/#/${url}?${params}`)
}

