import axios from 'axios'
import {ElMessage} from 'element-plus'
import router from '@/router'
import {store} from '@/vuex/store'
import {decryptAes} from '@/assets/js/aes'
import {getSession, hasSession} from '@/assets/js/sessionStorageUtils'
import {redirectLogin} from "@/assets/js/common";

const instance = axios.create();


instance.interceptors.request.use(config => {
    // @ts-ignore
    config.headers = {
        'Content-Type': 'application/json',
        username: hasSession('user_info') ? encodeURI(getSession('user_info').username) : '',
        locale: store.state.internationalization === 'zhCn' ? 'zh_CN' : 'en_US',
        token: hasSession('token') ? localStorage.getItem('token') : ''
    }
    return config
}, error => {
    ElMessage.error(error)
    return Promise.reject(error)
})

instance.interceptors.response.use(
    response => {
        // 判断请求是否成功
        if (!response.data.ok) {
            //请求返回错误信息
            if (response.data.code === 60013) {
                // 未登录
                redirectLogin();
                router.replace('login').catch()
            } else if (response.data.msg) {
                //错误信息提示
                ElMessage.warning(response.data.msg)
            } else if (response.data && response.data.data) {
                //错误信息集合提示
                // 判断是否需要解密
                if (store.state.encrypt) {
                    response.data.data = JSON.parse(decryptAes(response.data.data))
                }
                //组装消息集合
                const msg = []
                response.data.data.forEach((item: any) => msg.push(`<p>${item}</p>`))
                ElMessage({
                    dangerouslyUseHTMLString: true,
                    type: 'warning',
                    message: msg.join(''),
                })
            }
        } else {
            // 请求成功
            if (response.data && response.data.data) {
                //带有数据
                // 判断是否需要解密
                if (store.state.encrypt) {
                    let data: null
                    try {
                        data = JSON.parse(decryptAes(response.data.data))
                    } catch (e) {
                        if (typeof response.data.data === 'boolean' || typeof response.data.data === 'number') {
                            data = response.data.data
                        } else {
                            data = decryptAes(response.data.data)
                        }
                    }
                    response.data.data = data
                }
            } else if (response.data.msg) {
                // 只做提示
                ElMessage({
                    message: response.data.msg,
                    type: 'success',
                })
            }
        }
        return response
    },
    error => {
        //请求异常
        //关闭全局loading
        store.commit('fullscreenLoading', false)
        //接口不存在则重定向到404错误页面
        if (error.response.status === 404) {
            router.replace('404').catch()
        } else
            //登录过期，重定向登录页面
        if (error.response.data.code === 401) {
            router.replace('401').catch()
        } else
            //无权限
        if (error.response.data.code === 60014) {
            router.replace('403').catch()
        } else
            // 接口错误重定向到500错误页面
        if (error.response.data.code === 500) {
            if (error.response.data.msg) {
                ElMessage.warning(error.response.data.msg)
            } else {
                router.replace('500').catch()
            }
        }
        return Promise.reject(error)
    })

export function get(url: any, params = {}) {
    return new Promise((resolve, reject) => {
        instance.get(url, {params}).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(error)
        })
    })
}

export function getFile(url: any, params = {}) {
    return new Promise((resolve, reject) => {
        instance.get(url, {
            params,
            responseType: 'blob'
        }).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(error)
        })
    })
}

export function post(url: any, data = {}, params = {}) {
    return new Promise((resolve, reject) => {
        store.commit('loading', true)
        instance.post(url, data, {params}).then(response => {
            resolve(response.data)
        }, error => {
            reject(error)
        })
        setTimeout(() => store.commit('loading', false), 300)
    })
}

export function put(url: any, data = {}, params = {}) {
    return new Promise((resolve, reject) => {
        store.commit('loading', true)
        instance.put(url, data, {params}).then(response => {
            resolve(response.data)
        }, error => {
            reject(error)
        })
        setTimeout(() => store.commit('loading', false), 300)
    })
}

export function remove(url: any, params = {}) {
    return new Promise((resolve, reject) => {
        store.commit('loading', true)
        instance.delete(url, {params}).then(response => {
            resolve(response.data)
        }).catch(error => {
            reject(error)
        })
        setTimeout(() => store.commit('loading', false), 300)
    })
}
