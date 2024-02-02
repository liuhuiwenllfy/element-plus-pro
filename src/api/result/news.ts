import {get, post, put, remove} from '@/api/http-server'

const api = 'admin';

/**
 * 条件分页查询通知信息
 * @param params
 */
export const getNewsByPage = (params = {}) => {
    return get(`/${api}/system/newsInfo/getByPage`, params)
}

/**
 * 根据消息id查询消息
 * @param params
 */
export const getNewsById = (params = {}) => {
    return get(`/${api}/system/newsInfo/queryById`, params)
}

/**
 * 新增消息
 * @param data
 */
export const insertNews = (data = {}) => {
    return post(`/${api}/system/newsInfo/insert`, data)
}

/**
 * 修改消息
 * @param data
 */
export const updateNews = (data = {}) => {
    return put(`/${api}/system/newsInfo/updateById`, data)
}

/**
 * 批量删除消息
 * @param params
 */
export const deleteNews = (params = {}) => {
    return remove(`/${api}/system/newsInfo/deleteBatchByIdList`, params)
}

/**
 * 发布/取消发布消息
 * @param params
 */
export const updateStatus = (params = {}) => {
    return put(`/${api}/system/newsInfo/updateStatus`, {}, params)
}

/**
 * 最新消息查询
 * @param params
 */
export const queryLatestNews = (params = {}) => {
    return get(`/${api}/system/newsInfo/queryLatestNews`, params)
}

/**
 * 我的未读消息数量查询
 * @param params
 */
export const queryLatestNewsCount = (params = {}) => {
    return get(`/${api}/system/newsInfo/queryLatestNewsCount`, params)
}

/**
 * 条件分页查询我的消息
 * @param params
 */
export const getMyNewsByPage = (params = {}) => {
    return get(`/${api}/system/newsInfo/getMyNewsByPage`, params)
}

/**
 * 标记已读/未读
 * @param data
 */
export const updateIsRead = (data = {}) => {
    return put(`/${api}/system/newsReceiver/updateIsRead`, {}, data)
}

/**
 * 批量删除我的消息
 * @param params
 */
export const deleteMyNews = (params = {}) => {
    return remove(`/${api}/system/newsReceiver/deleteBatchByIdList`, params)
}

/**
 * 删除我的全部消息
 */
export const deleteMyAllNews = () => {
    return remove(`/${api}/system/newsReceiver/deleteBatchAll`)
}

/**
 * 条件分页查询我的消息
 * @param params
 */
export const getMyNewsByPageClient = (params = {}) => {
    return get(`/${api}/system/newsInfo/getMyNewsByPageClient`, params)
}

/**
 * 审核
 * @param data
 */
export const updateAuditById = (data = {}) => {
    return put(`/${api}//system/newsInfo/updateAuditById`, data)
}
