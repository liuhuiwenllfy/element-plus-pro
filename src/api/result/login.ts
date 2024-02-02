import {get, post, put} from '@/api/http-server'

const api = 'admin';

/**
 * 登录
 * @param params
 */
export const login = (params = {}) => {
    return post(`/${api}/login`, {}, params)
}

/**
 * 选择租户
 * @param params
 */
export const selectTenant = (params = {}) => {
    return put(`/${api}/selectTenant`, {}, params)
}

/**
 * 登出
 */
export const logout = () => {
    return post(`/${api}/logout`)
}

/**
 * 获取验证码
 * @param params
 */
export const getVerificationCode = (params = {}) => {
    return get(`/${api}/getVerificationCode`, params)
}

/**
 * 邮件发送验证码
 * @param params
 */
export const sendVerificationCode = (params = {}) => {
    return get(`/${api}/sendVerificationCode`, params)
}

/**
 * 通过邮箱修改密码
 * @param params
 */
export const changePasswordByEmail = (params = {}) => {
    return put(`/${api}/changePasswordByEmail`, {}, params)
}

/**
 * 注册用户
 * @param data
 */
export const register = (data = {}) => {
    return post(`/${api}/register`, data)
}


