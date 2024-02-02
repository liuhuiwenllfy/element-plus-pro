import {get, post, put, remove} from '@/api/http-server'

const api = 'admin';

/**
 * 条件分页查询富文本模板
 * @param params
 */
export const getRichTextTemplateByPage = (params = {}) => {
    return get(`/${api}/pluginmarket/richTextTemplateInfo/getByPage`, params)
}

/**
 * 新增富文本模板
 * @param data
 */
export const insertRichTextTemplate = (data = {}) => {
    return post(`/${api}/pluginmarket/richTextTemplateInfo/insert`, data)
}

/**
 * 修改富文本模板
 * @param data
 */
export const updateRichTextTemplate = (data = {}) => {
    return put(`/${api}/pluginmarket/richTextTemplateInfo/updateById`, data)
}

/**
 * 批量删除富文本模板
 * @param params
 */
export const deleteRichTextTemplate = (params = {}) => {
    return remove(`/${api}/pluginmarket/richTextTemplateInfo/deleteBatchByIdList`, params)
}

/**
 * 根据id查询富文本模板
 * @param params
 */
export const queryById = (params = {}) => {
    return get(`/${api}/pluginmarket/richTextTemplateInfo/queryById`, params)
}

/**
 * 发布或取消发布
 * @param params
 */
export const updatePublish = (params = {}) => {
    return put(`/${api}/pluginmarket/richTextTemplateInfo/updatePublish`, {}, params)
}

/**
 * 条件分页查询富文本模板
 * @param params
 */
export const getRichTextTemplateList = (params = {}) => {
    return get(`/${api}/pluginmarket/richTextTemplateInfo/getListClient`, params)
}

