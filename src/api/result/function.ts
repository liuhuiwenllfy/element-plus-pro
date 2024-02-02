import {get, post, put, remove} from '@/api/http-server'

const api = 'operations';

/**
 * 条件分页查询功能清单信息
 * @param params
 */
export const getFunctionByPage = (params = {}) => {
    return get(`/${api}/operations/functionInfo/getByPage`, params)
}

/**
 * 新增功能清单
 * @param data
 */
export const insertFunction = (data = {}) => {
    return post(`/${api}/operations/functionInfo/insert`, data)
}

/**
 * 根据功能清单id查询功能清单
 * @param params
 */
export const queryFunctionById = (params = {}) => {
    return get(`/${api}/operations/functionInfo/queryById`, params)
}

/**
 * 功能清单树结构
 * @param params
 */
export const getFunctionTree = (params = {}) => {
    return get(`/${api}/operations/functionInfo/getTree`, params)
}

/**
 * 修改功能清单
 * @param data
 */
export const updateFunction = (data = {}) => {
    return put(`/${api}/operations/functionInfo/updateById`, data)
}

/**
 * 批量删除功能清单
 * @param params
 */
export const deleteFunction = (params = {}) => {
    return remove(`/${api}/operations/functionInfo/deleteBatchByIdList`, params)
}

/**
 * 根据产品id查询功能清单树结构
 * @param params
 */
export const queryListByProductIdClient = (params = {}) => {
    return get(`/${api}/operations/functionInfo/queryListByProductIdClient`, params)
}