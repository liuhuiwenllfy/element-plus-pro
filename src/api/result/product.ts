import {get, post, put, remove} from '@/api/http-server'

const api = 'operations';

/**
 * 条件分页查询产品信息
 * @param params
 */
export const getProductByPage = (params = {}) => {
  return get(`/${api}/operations/productInfo/getByPage`, params)
}

/**
 * 查询产品集合
 * @param params
 */
export const getList = (params = {}) => {
  return get(`/${api}/operations/productInfo/getList`, params)
}

/**
 * 新增产品
 * @param data
 */
export const insertProduct = (data = {}) => {
  return post(`/${api}/operations/productInfo/insert`, data)
}

/**
 * 根据产品id查询产品
 * @param params
 */
export const queryProductById = (params = {}) => {
  return get(`/${api}/operations/productInfo/queryById`, params)
}

/**
 * 修改产品
 * @param data
 */
export const updateProduct = (data = {}) => {
  return put(`/${api}/operations/productInfo/updateById`, data)
}

/**
 * 批量删除产品
 * @param params
 */
export const deleteProduct = (params = {}) => {
  return remove(`/${api}/operations/productInfo/deleteBatchByIdList`, params)
}

/**
 * 产品设置文档权限
 * @param data
 */
export const updateProductDocument = (data = {}) => {
  return put(`/${api}/operations/documentVisibleProduct/updateProductDocument`, data)
}

/**
 * 功能权限设置
 * @param data
 */
export const updateProductFunction = (data = {}) => {
  return put(`/${api}/operations/productFunction/updateProductFunction`, data)
}
/**
 * 根据产品id查询文档id集合
 * @param data
 */
export const getDocumentIdListByProductId = (data = {}) => {
  return get(`/${api}/operations/documentVisibleProduct/getDocumentIdListByProductId`, data)
}
/**
 * 根据产品id查询功能id集合
 * @param data
 */
export const getFunctionIdListByProductId = (data = {}) => {
  return get(`/${api}/operations/productFunction/getFunctionIdListByProductId`, data)
}
/**
 * 查询产品集合
 * @param data
 */
export const getProductListClient = (data = {}) => {
  return get(`/${api}/operations/productInfo/getListClient`, data)
}
