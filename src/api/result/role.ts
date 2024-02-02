import {get, post, put, remove} from '@/api/http-server'

const api = 'admin';

/**
 * 条件分页查询角色信息
 * @param params
 */
export const getRoleByPage = (params = {}) => {
    return get(`/${api}/sys/roleInfo/getByPage`, params)
}

/**
 * 新增角色
 * @param data
 */
export const insertRole = (data = {}) => {
    return post(`/${api}/sys/roleInfo/insert`, data)
}

/**
 * 修改角色
 * @param data
 */
export const updateRole = (data = {}) => {
    return put(`/${api}/sys/roleInfo/updateById`, data)
}

/**
 * 根据角色id查询角色
 * @param params
 */
export const queryById = (params = {}) => {
    return get(`/${api}/sys/roleInfo/queryById`, params)
}

/**
 * 查询角色集合
 */
export const getRoleList = () => {
    return get(`/${api}/sys/roleInfo/getList`)
}

/**
 * 批量删除角色
 * @param params
 */
export const deleteRole = (params = {}) => {
    return remove(`/${api}/sys/roleInfo/deleteBatchByIdList`, params)
}

/**
 * 修改角色状态
 * @param params
 */
export const updateDisable = (params = {}) => {
    return put(`/${api}/sys/roleInfo/updateDisable`, {}, params)
}

/**
 * 角色设置菜单
 * @param data
 */
export const updateRoleMenu = (data = {}) => {
    return put(`/${api}/sys/roleMenu/updateRoleMenu`, data)
}
