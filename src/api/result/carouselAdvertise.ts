import {get, put} from '@/api/http-server'

const api = 'advertise';

/**
 * 分页查询
 * @param params
 */
export const queryByPage = (params = {}) => {
    return get(`/${api}/advertise/carouselAdvertiseInfo/queryByPage`, params)
}

/**
 * 根据id查询
 * @param params
 */
export const queryById = (params = {}) => {
    return get(`/${api}/advertise/carouselAdvertiseInfo/queryById`, params)
}

/**
 * 审核
 * @param data
 */
export const updateAuditById = (data = {}) => {
    return put(`/${api}/advertise/carouselAdvertiseInfo/updateAuditById`, data)
}
