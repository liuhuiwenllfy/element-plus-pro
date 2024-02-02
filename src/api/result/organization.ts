import {get, post, put, remove} from '@/api/http-server'

const api = 'admin';

/**
 * 条件分页查询机构信息
 * @param params
 */
export const getOrganizationByPage = (params = {}) => {
    return get(`/${api}/system/orgInfo/getByPage`, params)
}

/**
 * 根据机构id查询机构
 * @param params
 */
export const queryOrganizationById = (params = {}) => {
    return get(`/${api}/system/orgInfo/queryById`, params)
}

/**
 * 机构树结构
 * @param params
 */
export const getOrganizationTree = (params = {}) => {
    return get(`/${api}/system/orgInfo/getTree`, params)
}

/**
 * 新增机构
 * @param data
 */
export const insertOrganization = (data = {}) => {
    return post(`/${api}/system/orgInfo/insert`, data)
}

/**
 * 修改机构
 * @param data
 */
export const updateOrganization = (data = {}) => {
    return put(`/${api}/system/orgInfo/updateById`, data)
}

/**
 * 批量删除机构
 * @param params
 */
export const deleteOrganization = (params = {}) => {
    return remove(`/${api}/system/orgInfo/deleteBatchByIdList`, params)
}
