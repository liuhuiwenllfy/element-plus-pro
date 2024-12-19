import {get} from '@/api/http-server'

const api = 'single-admin';

/**
 * npm下载量统计
 * @param params
 */
export const getNpmStat = (params = {}) => {
    return get(`/${api}/admin/userInfo/getNpmStat`, params)
}
