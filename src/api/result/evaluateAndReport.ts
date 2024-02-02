import {get, post} from '@/api/http-server'

const api = 'admin';

/**
 * 条件分页查询评价和举报信息
 * @param params
 */
export const getEvaluateAndReportInfoByPage = (params = {}) => {
    return get(`/${api}/system/evaluateAndReportInfo/getByPage`, params)
}

/**
 * 根据评价和举报id查询评价和举报
 * @param params
 */
export const getEvaluateAndReportInfoById = (params = {}) => {
    return get(`/${api}/system/evaluateAndReportInfo/queryById`, params)
}

/**
 * 新增评价和举报
 * @param data
 */
export const insertEvaluateAndReport = (data = {}) => {
    return post(`/${api}/system/evaluateAndReportInfo/insert`, data)
}
