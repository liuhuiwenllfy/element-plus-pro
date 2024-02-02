import {get, post, put, remove} from '@/api/http-server'

const api = 'admin';

/**
 * 条件分页查询首页统计信息
 * @param params
 */
export const getHomeStatisticsByPage = (params = {}) => {
    return get(`/${api}/system/homeStatisticsInfo/getByPage`, params)
}

/**
 * 根据首页统计id查询首页统计
 * @param params
 */
export const getHomeStatisticsById = (params = {}) => {
    return get(`/${api}/system/homeStatisticsInfo/queryById`, params)
}

/**
 * 新增首页统计
 * @param data
 */
export const insertHomeStatistics = (data = {}) => {
    return post(`/${api}/system/homeStatisticsInfo/insert`, data)
}

/**
 * 修改首页统计
 * @param data
 */
export const updateHomeStatistics = (data = {}) => {
    return put(`/${api}/system/homeStatisticsInfo/updateById`, data)
}

/**
 * 批量删除首页统计
 * @param params
 */
export const deleteHomeStatistics = (params = {}) => {
    return remove(`/${api}/system/homeStatisticsInfo/deleteBatchByIdList`, params)
}

/**
 * 查询首页统计信息集合（关联用户自定义样式）
 * @param params
 */
export const getHomeStatisticsList = (params = {}) => {
    return get(`/${api}/system/homeStatisticsInfo/queryList`, params)
}
/**
 * 批量保存自定义首页样式
 * @param params
 */
export const insertOrUpdateBatchUserHomeStatistics = (params = {}) => {
    return post(`/${api}/system/userHomeStatistics/insertOrUpdateBatch`, params)
}
/**
 * 保存自定义首页样式
 * @param params
 */
export const insertOrUpdateUserHomeStatistics = (params = {}) => {
    return post(`/${api}/system/userHomeStatistics/insertOrUpdate`, params)
}

/**
 * 条件分页查询首页统计自定义信息
 * @param params
 */
export const getHsCustomizeByPage = (params = {}) => {
    return get(`/${api}/system/userHomeStatistics/getByPage`, params)
}

/**
 * 根据首页统计信息id查询自定义首页统计信息
 * @param params
 */
export const getUserHomeStatisticsByHomeStatisticsId = (params = {}) => {
    return get(`/${api}/system/userHomeStatistics/queryByHomeStatisticsId`, params)
}
