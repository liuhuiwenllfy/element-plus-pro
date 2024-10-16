import axios from 'axios'
import {ElMessage} from 'element-plus'
import router from '@/router'
import {useCommonStore} from "@/pinia/common.ts";

const instance = axios.create();

let commonStore = null as any;

instance.interceptors.request.use(config => {
    commonStore = useCommonStore()
    // 开启按钮loading
    commonStore.changeLoading(true)
    // @ts-ignore
    config.headers = {
        // @ts-ignore
        locale: commonStore.locale === 'zhCn' ? 'zh_CN' : 'en_US',
    }
    return config
}, error => {
    // 关闭全局loading
    commonStore.changeFullscreenLoading(false)
    // 关闭按钮loading
    commonStore.changeLoading(false)
    // 提示错误信息
    ElMessage.error(error)
    // 拒绝
    return Promise.reject(error)
})

instance.interceptors.response.use(
    response => {
        // 请求是否成功
        if (response.data.ok) {
            // 是否需要提示信息
            if (response.data.msg) {
                ElMessage({
                    message: response.data.msg,
                    type: 'success',
                })
            }
        } else if (response.data.msg) {
            // 提示错误信息
            ElMessage.warning(response.data.msg)
        } else if (response.data?.data) {
            // 组装消息集合
            const msg: string[] = []
            response.data.data.forEach((item: any) => msg.push(`<p>${item}</p>`))
            // 提示错误信息
            ElMessage({
                dangerouslyUseHTMLString: true,
                type: 'warning',
                message: msg.join(''),
            })
        }
        // 关闭全局loading
        commonStore.changeFullscreenLoading(false)
        // 关闭按钮loading
        commonStore.changeLoading(false)
        return response
    },
    error => {
        if (error?.response?.status === 401) {
            if (error.response?.data?.msg) {
                ElMessage.warning(error.response.data.msg)
            } else {
                router.push('401').catch()
            }
        }
        // 资源不存在
        if (error.response.status === 404) {
            if (error.response?.data?.msg) {
                ElMessage.warning(error.response.data.msg)
            } else {
                router.push('404').catch()
            }
        }
        // 无权限访问
        if (error.response.status === 403) {
            if (error.response?.data?.msg) {
                ElMessage.warning(error.response.data.msg)
            } else {
                router.push('403').catch()
            }
        }
        // 程序异常
        if (error.response.status === 500) {
            if (error.response?.data?.msg) {
                ElMessage.error(error.response.data.msg)
            } else {
                router.push('500').catch()
            }
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
        const request = {
            requestType: 'get',
            url,
            params
        }
        instanceGet(url, params, resolve, reject);
    })
}

function instanceGet(url: any, params: {}, resolve: any, reject: any) {
    instance.get(url, {params}).then(response => {
        resolve(response.data)
    }).catch(error => {
        reject(error)
    })
}

export function post(url: any, data = {}, params = {}) {
    return new Promise((resolve, reject) => {
        instancePost(url, data, params, resolve, reject);
    })
}

function instancePost(url: any, data: {}, params: {}, resolve: any, reject: any) {
    instance.post(url, data, {params}).then(response => {
        resolve(response.data)
    }, error => {
        reject(error)
    })
}

export function put(url: any, data = {}, params = {}) {
    return new Promise((resolve, reject) => {
        instancePut(url, data, params, resolve, reject);
    })
}

function instancePut(url: any, data: {}, params: {}, resolve: any, reject: any) {
    instance.put(url, data, {params}).then(response => {
        resolve(response.data)
    }, error => {
        reject(error)
    })
}

export function remove(url: any, params = {}) {
    return new Promise((resolve, reject) => {
        instanceRemove(url, params, resolve, reject);
    })
}

function instanceRemove(url: any, params: {}, resolve: any, reject: any) {
    instance.delete(url, {params}).then(response => {
        resolve(response.data)
    }).catch(error => {
        reject(error)
    })
}
