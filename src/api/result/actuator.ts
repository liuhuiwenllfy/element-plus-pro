import {get, remove} from '@/api/http-server'

const api = 'scheduledTask';

/**
 * 条件分页查询执行器
 * @param params
 */
export const getActuatorByPage = (params = {}) => {
    return get(`/${api}/scheduledExecutor/actuatorInfo/getByPage`, params)
}

/**
 * 批量删除执行器
 * @param params
 */
export const deleteActuator = (params = {}) => {
    return remove(`/${api}/scheduledExecutor/actuatorInfo/deleteBatchByIdList`, params)
}
