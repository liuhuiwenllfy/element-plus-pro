import {get, post, put, remove} from '@/api/http-server'

const api = 'advertise';

/**
 * 新增
 * @param data
 */
export const insert = (data = {}) => {
    return post(`/${api}/advertise/pluginMarketHomeRightCarouselAdvertiseInfo/insert`, data)
}

/**
 * 修改
 * @param data
 */
export const updateById = (data = {}) => {
    return put(`/${api}/advertise/pluginMarketHomeRightCarouselAdvertiseInfo/updateById`, data)
}

/**
 * 批量删除
 * @param params
 */
export const deleteBatchByIdList = (params = {}) => {
    return remove(`/${api}/advertise/pluginMarketHomeRightCarouselAdvertiseInfo/deleteBatchByIdList`, params)
}

/**
 * 分页查询
 * @param params
 */
export const queryByPage = (params = {}) => {
    return get(`/${api}/advertise/pluginMarketHomeRightCarouselAdvertiseInfo/queryByPage`, params)
}

/**
 * 根据id查询
 * @param params
 */
export const queryById = (params = {}) => {
    return get(`/${api}/advertise/pluginMarketHomeRightCarouselAdvertiseInfo/queryById`, params)
}

/**
 * 查询上架的广告
 * @param params
 */
export const queryIsPut = (params = {}) => {
    return get(`/${api}/advertise/pluginMarketHomeRightCarouselAdvertiseInfo/queryIsPut`, params)
}


/**
 * 发布/取消发布
 * @param params
 */
export const updateIsPut = (params = {}) => {
    return put(`/${api}/advertise/pluginMarketHomeRightCarouselAdvertiseInfo/updateIsPut`, {}, params)
}

/**
 * 修改规则
 * @param params
 */
export const updateRule = (params = {}) => {
    return put(`/${api}/advertise/pluginMarketHomeRightCarouselAdvertiseInfo/updateRule`, {}, params)
}
