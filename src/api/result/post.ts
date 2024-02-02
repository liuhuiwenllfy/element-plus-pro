import {get, post, put, remove} from '@/api/http-server'

const api = 'admin';

/**
 * 条件分页查询岗位信息
 * @param params
 */
export const getPostByPage = (params = {}) => {
    return get(`/${api}/system/postInfo/getByPage`, params)
}

/**
 * 新增岗位
 * @param data
 */
export const insertPost = (data = {}) => {
    return post(`/${api}/system/postInfo/insert`, data)
}

/**
 * 根据岗位id查询岗位
 * @param params
 */
export const queryPostById = (params = {}) => {
    return get(`/${api}/system/postInfo/queryById`, params)
}

/**
 * 岗位树结构
 * @param params
 */
export const getPostTree = (params = {}) => {
    return get(`/${api}/system/postInfo/getTree`, params)
}

/**
 * 修改岗位
 * @param data
 */
export const updatePost = (data = {}) => {
    return put(`/${api}/system/postInfo/updateById`, data)
}

/**
 * 批量删除岗位
 * @param params
 */
export const deletePost = (params = {}) => {
    return remove(`/${api}/system/postInfo/deleteBatchByIdList`, params)
}
