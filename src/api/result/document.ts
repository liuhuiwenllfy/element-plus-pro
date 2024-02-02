import {get, post, put, remove} from '@/api/http-server'

const api = 'operations';

/**
 * 条件分页查询文档信息
 * @param params
 */
export const getDocumentByPage = (params = {}) => {
  return get(`/${api}/operations/documentInfo/getByPage`, params)
}

/**
 * 新增文档
 * @param data
 */
export const insertDocument = (data = {}) => {
  return post(`/${api}/operations/documentInfo/insert`, data)
}

/**
 * 根据文档id查询文档
 * @param params
 */
export const queryDocumentById = (params = {}) => {
  return get(`/${api}/operations/documentInfo/queryById`, params)
}

/**
 * 文档树结构
 * @param params
 */
export const getDocumentTree = (params = {}) => {
  return get(`/${api}/operations/documentInfo/getTree`, params)
}

/**
 * 修改文档
 * @param data
 */
export const updateDocument = (data = {}) => {
  return put(`/${api}/operations/documentInfo/updateById`, data)
}

/**
 * 批量删除文档
 * @param params
 */
export const deleteDocument = (params = {}) => {
  return remove(`/${api}/operations/documentInfo/deleteBatchByIdList`, params)
}

/**
 * 文档树结构
 * @param params
 */
export const getDocumentTreeClient = (params = {}) => {
  return get(`/${api}/operations/documentInfo/getTreeClient`, params)
}

/**
 * 根据文档id查询文档
 * @param params
 */
export const queryByIdClient = (params = {}) => {
  return get(`/${api}/operations/documentInfo/queryByIdClient`, params)
}

/**
 * 修改展示状态
 * @param params
 */
export const updateShow = (params = {}) => {
  return put(`/${api}/operations/documentInfo/updateShow`, {}, params)
}
