import {get} from '@/api/http-server'

const api = 'log';

/**
 * 条件分页查询日志
 * @param params
 */
export const getLogByPage = (params = {}) => {
  return get(`/${api}/sys/operationLog/getByPage`, params)
}

/**
 * 条件分页查询登录日志
 * @param params
 */
export const getLoginLogByPage = (params = {}) => {
  return get(`/${api}/system/loginLog/getByPage`, params)
}

/**
 * 用户行为统计
 * @param param
 */
export const getUserBehaviorStatistics = (param = {}) => {
  return get(`/${api}/sys/operationLog/getUserBehaviorStatistics`, param)
}