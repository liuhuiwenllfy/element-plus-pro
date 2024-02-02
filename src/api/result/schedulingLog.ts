import {get} from "@/api/http-server";

const api = 'scheduledTask';

/**
 * 条件分页查询日志
 * @param params
 */
export const getSchedulingLogByPage = (params = {}) => {
    return get(`/${api}/scheduledExecutor/schedulingLog/getByPage`, params)
}