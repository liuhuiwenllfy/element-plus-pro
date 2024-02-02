import {get, post, put, remove} from '@/api/http-server'

const api = 'pluginMarket';

/**
 * 条件分页查询推荐标签
 * @param params
 */
export const getRecommendLabelByPage = (params = {}) => {
    return get(`/${api}/pluginmarket/recommendLabelInfo/getByPage`, params)
}

/**
 * 新增推荐标签
 * @param data
 */
export const insertRecommendLabel = (data = {}) => {
    return post(`/${api}/pluginmarket/recommendLabelInfo/insert`, data)
}

/**
 * 修改推荐标签
 * @param data
 */
export const updateRecommendLabel = (data = {}) => {
    return put(`/${api}/pluginmarket/recommendLabelInfo/updateById`, data)
}

/**
 * 删除推荐标签
 * @param params
 */
export const deleteRecommendLabel = (params = {}) => {
    return remove(`/${api}/pluginmarket/recommendLabelInfo/deleteBatchByIdList`, params)
}

/**
 * 根据推荐标签id查询
 * @param params
 */
export const queryById = (params = {}) => {
    return get(`/${api}/pluginmarket/recommendLabelInfo/queryById`, params)
}
