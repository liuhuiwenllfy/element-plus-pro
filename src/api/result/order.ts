import {get, post, put, remove} from '@/api/http-server'

const api = 'operations';

/**
 * 条件分页查询订单信息
 * @param params
 */
export const getOrderByPage = (params = {}) => {
    return get(`/${api}/operations/orderInfo/getByPage`, params)
}

/**
 * 新增订单
 * @param data
 */
export const insertOrder = (data = {}) => {
    return post(`/${api}/operations/orderInfo/insert`, data)
}

/**
 * 根据订单id查询订单
 * @param params
 */
export const queryOrderById = (params = {}) => {
    return get(`/${api}/operations/orderInfo/queryById`, params)
}

/**
 * 修改订单
 * @param data
 */
export const updateOrder = (data = {}) => {
    return put(`/${api}/operations/orderInfo/updateById`, data)
}

/**
 * 批量删除订单
 * @param params
 */
export const deleteOrder = (params = {}) => {
    return remove(`/${api}/operations/orderInfo/deleteBatchByIdList`, params)
}

/**
 * 查询购买版本用户数分布
 * @param param
 */
export const getUserVersionDistributionStatistics = (param = {}) => {
    return get(`/${api}/operations/orderInfo/getUserVersionDistributionStatistics`, param)
}
/**
 * 用户付费排行统计
 * @param param
 */
export const getUserPaidRankingStatistics = (param = {}) => {
    return get(`/${api}/operations/orderInfo/getUserPaidRankingStatistics`, param)
}

