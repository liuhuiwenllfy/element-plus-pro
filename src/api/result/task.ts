import {get, post, put, remove} from '@/api/http-server'

const api = 'scheduledTask';

/**
 * 条件分页查询任务
 * @param params
 */
export const getTaskByPage = (params = {}) => {
    return get(`/${api}/scheduledExecutor/taskInfo/getByPage`, params)
}
/**
 * 根据任务id查询任务
 * @param params
 */
export const queryTaskById = (params = {}) => {
    return get(`/${api}/scheduledExecutor/taskInfo/queryById`, params)
}

/**
 * 创建任务(启动状态)
 * @param data
 */
export const insertTask = (data = {}) => {
    return post(`/${api}/scheduledExecutor/taskInfo/insert`, data)
}

/**
 * 启动任务
 * @param data
 */
export const updateTaskStart = (data = {}) => {
    return post(`/${api}/scheduledExecutor/taskInfo/updateStart`, {}, data)
}

/**
 * 修改任务
 * @param data
 */
export const updateTask = (data = {}) => {
    return put(`/${api}/scheduledExecutor/taskInfo/updateById`, data)
}

/**
 * 暂停任务
 * @param data
 */
export const updateTaskStop = (data = {}) => {
    return put(`/${api}/scheduledExecutor/taskInfo/updateStop`, {}, data)
}

/**
 * 删除任务
 * @param params
 */
export const deleteTask = (params = {}) => {
    return remove(`/${api}/scheduledExecutor/taskInfo/deleteById`, params)
}

/**
 * 更新状态
 * @param data
 */
export const updateTaskStatus = (data = {}) => {
    return put(`/${api}/scheduledExecutor/taskInfo/updateStatus`, {}, data)
}