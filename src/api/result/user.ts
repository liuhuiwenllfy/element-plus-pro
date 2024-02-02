import {get, post, put, remove} from '@/api/http-server'

const api = 'admin';

/**
 * 条件分页查询用户信息
 * @param params
 */
export const getUserByPage = (params = {}) => {
    return get(`/${api}/sys/userInfo/getByPage`, params)
}

/**
 * 根据用户id查询用户
 * @param params
 */
export const queryUserById = (params = {}) => {
    return get(`/${api}/sys/userInfo/queryById`, params)
}

/**
 * 根据用户id查询用户
 * @param params
 */
export const queryByIdClient = (params = {}) => {
    return get(`/${api}/sys/userInfo/queryByIdClient`, params)
}

/**
 * 新增用户
 * @param data
 */
export const insertUser = (data = {}) => {
    return post(`/${api}/sys/userInfo/insert`, data)
}

/**
 * 修改用户
 * @param data
 */
export const updateUser = (data = {}) => {
    return put(`/${api}/sys/userInfo/updateById`, data)
}

/**
 * 批量删除用户
 * @param params
 */
export const deleteUser = (params = {}) => {
    return remove(`/${api}/sys/userInfo/deleteBatchByIdList`, params)
}

/**
 * 修改用户状态
 * @param params
 */
export const updateDisable = (params = {}) => {
    return put(`/${api}/sys/userInfo/updateDisable`, {}, params)
}

/**
 * 根据用户id查询所属租户集合
 * @param params
 */
export const queryUserTenantByUserId = (params = {}) => {
    return get(`/${api}/sys/userInfo/queryUserTenantByUserId`, params)
}

/**
 * 修改密码
 * @param data
 */
export const changePassword = (data = {}) => {
    return put(`/${api}/sys/userInfo/changePassword`, data)
}

/**
 * 修改用户画像
 * @param data
 */
export const updateUserInfo = (data = {}) => {
    return put(`/${api}/sys/userInfo/updateUserInfo`, data)
}

/**
 * 根据主邮箱查询用户
 * @param params
 */
export const queryByEmail = (params = {}) => {
    return get(`/${api}/sys/userInfo/queryByEmail`, params)
}

/**
 * 邀请加入租户
 * @param data
 */
export const insertInviteToTenant = (data = {}) => {
    return post(`/${api}/sys/userInfo/insertInviteToTenant`, data)
}

/**
 * 申请加入租户通过
 * @param data
 */
export const insertApplyToJoinTenantsVia = (data = {}) => {
    return post(`/${api}/sys/userInfo/insertApplyToJoinTenantsVia`, data)
}
/**
 * 确认加入租户
 * @param param
 */
export const joinTheTenant = (param = {}) => {
    return get(`/${api}/sys/userInfo/joinTheTenant`, param)
}

/**
 * 加入插件市场租户
 * @param data
 */
export const joinPluginMarketTenant = (data = {}) => {
    return post(`/${api}/sys/userInfo/joinPluginMarketTenant`, data)
}
/**
 * 根据用户名称查询用户
 * @param param
 */
export const queryByUsername = (param = {}) => {
    return get(`/${api}/sys/userInfo/queryByUsername`, param)
}
/**
 * 获取用户集合
 * @param param
 */
export const getUserList = (param = {}) => {
    return get(`/${api}/sys/userInfo/getList`, param)
}
/**
 * 查询用户总数
 * @param param
 */
export const getUserCount = (param = {}) => {
    return get(`/${api}/sys/userInfo/getUserCount`, param)
}
/**
 * 查询新用户总数
 * @param param
 */
export const getNewUserCount = (param = {}) => {
    return get(`/${api}/sys/userInfo/getNewUserCount`, param)
}
/**
 * 查询活跃用户总数
 * @param param
 */
export const getActiveUserCount = (param = {}) => {
    return get(`/${api}/sys/userInfo/getActiveUserCount`, param)
}
/**
 * 查询活跃用户总数
 * @param param
 */
export const getLastSevenDaysActiveUserCount = (param = {}) => {
    return get(`/${api}/sys/userInfo/getLastSevenDaysActiveUserCount`, param)
}