import {get, post, put, remove} from '@/api/http-server'

const api = 'admin';

/**
 * 条件分页查询字典信息
 * @param params
 */
export const getDictionaryByPage = (params = {}) => {
    return get(`/${api}/system/dictionaryInfo/getByPage`, params)
}

/**
 * 字典树结构
 * @param params
 */
export const getMenuDictionaryTree = (params = {}) => {
    return get(`/${api}/system/dictionaryInfo/getTree`, params)
}

/**
 * 新增字典
 * @param data
 */
export const insertDictionary = (data = {}) => {
    return post(`/${api}/system/dictionaryInfo/insert`, data)
}

/**
 * 修改字典
 * @param data
 */
export const updateDictionary = (data = {}) => {
    return put(`/${api}/system/dictionaryInfo/updateById`, data)
}

/**
 * 根据字典id查询字典
 * @param params
 */
export const queryDictionaryById = (params = {}) => {
    return get(`/${api}/system/dictionaryInfo/queryById`, params)
}

/**
 * 批量删除字典
 * @param params
 */
export const deleteDictionary = (params = {}) => {
    return remove(`/${api}/system/dictionaryInfo/deleteBatchByIdList`, params)
}
/**
 * 根据字典类型查询字典集合
 * @param params
 */
export const queryByDictType = (params = {}) => {
    return get(`/${api}/system/dictionaryInfo/queryByDictType`, params)
}
