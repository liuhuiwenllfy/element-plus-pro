import {get, post, put, remove} from '@/api/http-server'

const api = 'admin';

/**
 * 条件分页查询租户信息
 * @param params
 */
export const getTenantByPage = (params = {}) => {
  return get(`/${api}/sys/tenantInfo/getByPage`, params)
}

/**
 * 新增租户
 * @param data
 */
export const insertTenant = (data = {}) => {
  return post(`/${api}/sys/tenantInfo/insert`, data)
}

/**
 * 根据租户id查询租户
 * @param params
 */
export const queryTenantById = (params = {}) => {
  return get(`/${api}/sys/tenantInfo/queryById`, params)
}

/**
 * 修改租户
 * @param data
 */
export const updateTenant = (data = {}) => {
  return put(`/${api}/sys/tenantInfo/updateById`, data)
}

/**
 * 批量删除租户
 * @param params
 */
export const deleteTenant = (params = {}) => {
  return remove(`/${api}/sys/tenantInfo/deleteBatchByIdList`, params)
}

/**
 * 修改租户状态
 * @param params
 */
export const updateTenantDisable = (params = {}) => {
  return put(`/${api}/sys/tenantInfo/updateDisable`, {}, params)
}

/**
 * 用户新增租户
 * @param data
 */
export const saveTenantOfUser = (data = {}) => {
  return post(`/${api}/sys/tenantInfo/saveTenantOfUser`, data)
}

/**
 * 获取当前登录人租户集合
 * @param params
 */
export const queryTenantOfUserId = (params = {}) => {
  return get(`/${api}/sys/tenantInfo/queryTenantOfUserId`, params)
}

/**
 * 获取当前用户可以加入的租户
 * @param params
 */
export const queryCanJoinTenantOfUserId = (params = {}) => {
  return get(`/${api}/sys/tenantInfo/queryCanJoinTenantOfUserId`, params)
}

/**
 * 申请加入租户
 * @param data
 */
export const applyToJoinTenant = (data = {}) => {
  return post(`/${api}/sys/tenantInfo/applyToJoinTenant`, data)
}

/**
 * 根据用户id查询是否创建过租户
 * @param params
 */
export const isCreateTenant = (params = {}) => {
  return get(`/${api}/sys/tenantInfo/isCreateTenant`, params)
}

/**
 * 获取第三方秘钥
 * @param params
 */
export const getSecret = (params = {}) => {
  return get(`/${api}/sys/tenantInfo/getSecret`, params)
}

/**
 * 修改租户（第三方信息补充）
 * @param params
 */
export const updateThirdPartyById = (params = {}) => {
  return put(`/${api}/sys/tenantInfo/updateThirdPartyById`, params)
}

/**
 * 根据租户id查询第三方信息
 * @param params
 */
export const queryThirdPartyById = (params = {}) => {
  return get(`/${api}/sys/tenantInfo/queryThirdPartyById`, params)
}

/**
 * 生成秘钥对
 * @param params
 */
export const initKeyPair = (params = {}) => {
  return get(`/${api}/sys/tenantInfo/initKeyPair`, params)
}
