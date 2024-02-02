import {get, post, put, remove} from '@/api/http-server'

const api = 'admin';

/**
 * 条件分页查询接口信息
 * @param params
 */
export const getUrlByPage = (params = {}) => {
  return get(`/${api}/sys/urlInfo/getByPage`, params)
}

/**
 * 新增接口
 * @param data
 */
export const insertUrl = (data = {}) => {
  return post(`/${api}/sys/urlInfo/insert`, data)
}

/**
 * 修改接口
 * @param data
 */
export const updateUrl = (data = {}) => {
  return put(`/${api}/sys/urlInfo/updateById`, data)
}

/**
 * 批量删除接口
 * @param data
 */
export const deleteUrl = (data = {}) => {
  return remove(`/${api}/sys/urlInfo/deleteBatchByIdList`, data)
}

/**
 * 根据接口id查询接口
 * @param params
 */
export const queryById = (params = {}) => {
  return get(`/${api}/sys/urlInfo/queryById`, params)
}

/**
 * 菜单和接口树结构
 */
export const getMenuTree = () => {
  return get(`/${api}/sys/urlInfo/getTree`)
}

/**
 * 根据角色查询接口id集合
 * @param params
 */
export const getUrlIdListByRoleId = (params = {}) => {
  return get(`/${api}/sys/roleUrl/getUrlIdListByRoleId`, params)
}

/**
 * 角色设置接口
 * @param data
 */
export const updateRoleUrl = (data = {}) => {
  return put(`/${api}/sys/roleUrl/updateRoleUrl`, data)
}
