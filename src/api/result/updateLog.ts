import {get, post, put, remove} from '@/api/http-server'

const api = 'operations';

/**
 * 条件分页查询更新日志信息
 * @param params
 */
export const getUpdateLogByPage = (params = {}) => {
    return get(`/${api}/log/updateLog/getByPage`, params)
}

/**
 * 新增更新日志
 * @param data
 */
export const insertUpdateLog = (data = {}) => {
    return post(`/${api}/log/updateLog/insert`, data)
}

/**
 * 修改更新日志
 * @param data
 */
export const updateUpdateLog = (data = {}) => {
    return put(`/${api}/log/updateLog/updateById`, data)
}

/**
 * 根据更新日志id查询更新日志
 * @param params
 */
export const queryUpdateLogById = (params = {}) => {
    return get(`/${api}/log/updateLog/queryById`, params)
}

/**
 * 批量删除更新日志
 * @param params
 */
export const deleteUpdateLog = (params = {}) => {
    return remove(`/${api}/log/updateLog/deleteBatchByIdList`, params)
}

/**
 * 条件分页查询更新日志信息
 * @param params
 */
export const getUpdateLogByPageClient = (params = {}) => {
    return get(`/${api}/log/updateLog/getByPageClient`, params)
}
