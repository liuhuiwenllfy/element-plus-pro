import {get, post, put} from '@/api/http-server'

const api = 'admin';

/**
 * 条件分页查询系统优化建议和bug信息
 * @param params
 */
export const getSosuggestionByPage = (params = {}) => {
    return get(`/${api}/system/sosuggestionInfo/getByPage`, params)
}

/**
 * 根据系统优化建议和bugid查询系统优化建议和bug
 * @param params
 */
export const getSosuggestionById = (params = {}) => {
    return get(`/${api}/system/sosuggestionInfo/queryById`, params)
}

/**
 * 修改解决状态
 * @param param
 */
export const updateSolve = (param = {}) => {
    return put(`/${api}/system/sosuggestionInfo/updateSolve`,{}, param)
}

/**
 * 新增系统优化建议和bug
 * @param data
 */
export const insertSosuggestion = (data = {}) => {
    return post(`/${api}/system/sosuggestionInfo/insert`, data)
}
