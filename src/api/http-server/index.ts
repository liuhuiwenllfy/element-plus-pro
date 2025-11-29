import axios from 'axios'
import router from '@/router'
import {useCommonStore} from "@/pinia/common.ts";
import {EventManager} from "@/assets/js/eventBus.ts";

const instance = axios.create();

let commonStore = null as any;
// @ts-ignore
instance.interceptors.request.use(config => {
    commonStore = useCommonStore()
    // 开启按钮loading
    commonStore.changeLoading(true)
    const _config = config
    _config.headers.locale = commonStore.locale === 'zhCn' ? 'zh_CN' : 'en_US'
    return _config
}, error => {
    // 关闭全局loading
    commonStore.changeFullscreenLoading(false)
    // 关闭按钮loading
    commonStore.changeLoading(false)
    // 提示错误信息
    EventManager.showMessage('error', error.message);
    // 拒绝
    return Promise.reject(error)
})

instance.interceptors.response.use(
    response => {
        // 请求是否成功
        if (response.data.ok) {
            // 是否需要提示信息
            if (response.data.msg) {
                EventManager.showMessage('success', response.data.msg);
            }
        } else if (response.data.msg) {
            // 提示错误信息
            EventManager.showMessage('warning', response.data.msg);
        } else if (response.data?.data) {
            // 组装消息集合
            const msg: string[] = []
            response.data.data.forEach((item: any) => msg.push(`<p>${item}</p>`))
            // 提示错误信息
            EventManager.showMessage('warning', msg.join(''), {dangerouslyUseHTMLString: true});
        }
        // 关闭全局loading
        commonStore.changeFullscreenLoading(false)
        // 关闭按钮loading
        commonStore.changeLoading(false)
        return response
    },
    error => {
        if (error.response?.data?.msg) {
            EventManager.showMessage('warning', error.response.data.msg);
        } else {
            router.push(error.response.status.toString()).catch()
        }
        // 关闭全局loading
        commonStore.changeFullscreenLoading(false)
        // 关闭按钮loading
        commonStore.changeLoading(false)
        // 拒绝
        return Promise.reject(error)
    }
)

export function get(url: any, params = {}) {
    return new Promise((resolve, reject) => {
        instance.get(url, {params}).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(error)
        })
    })
}

export function post(url: any, data = {}, params = {}) {
    return new Promise((resolve, reject) => {
        instance.post(url, data, {params}).then(response => {
            resolve(response.data)
        }, error => {
            reject(error)
        })
    })
}

export function put(url: any, data = {}, params = {}) {
    return new Promise((resolve, reject) => {
        instance.put(url, data, {params}).then(response => {
            resolve(response.data)
        }, error => {
            reject(error)
        })
    })
}

export function remove(url: any, params = {}) {
    return new Promise((resolve, reject) => {
        instance.delete(url, {params}).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(error)
        })
    })
}
