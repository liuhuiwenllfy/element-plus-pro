import {get, post, put, remove} from '@/api/http-server'

const api = 'admin';

/**
 * 条件分页查询菜单信息
 * @param params
 */
export const getMenuByPage = (params = {}) => {
    return get(`/${api}/sys/menuInfo/getByPage`, params)
}

/**
 * 菜单树结构
 * @param params
 */
export const getMenuTree = (params = {}) => {
    return get(`/${api}/sys/menuInfo/getTree`, params)
}

/**
 * 新增菜单
 * @param data
 */
export const insertMenu = (data = {}) => {
    return post(`/${api}/sys/menuInfo/insert`, data)
}

/**
 * 修改菜单
 * @param data
 */
export const updateMenu = (data = {}) => {
    return put(`/${api}/sys/menuInfo/updateById`, data)
}

/**
 * 根据菜单id查询菜单
 * @param params
 */
export const queryMenuById = (params = {}) => {
    return get(`/${api}/sys/menuInfo/queryById`, params)
}

/**
 * 批量删除菜单
 * @param params
 */
export const deleteMenu = (params = {}) => {
    return remove(`/${api}/sys/menuInfo/deleteBatchByIdList`, params)
}

/**
 * 根据角色查询菜单id集合
 * @param params
 */
export const getMenuIdListByRoleId = (params = {}) => {
    return get(`/${api}/sys/roleMenu/getMenuIdListByRoleId`, params)
}
