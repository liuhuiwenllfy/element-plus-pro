import {getFile} from '@/api/http-server'

const api = 'upload';

/**
 * 条件分页查询字典信息
 * @param params
 */
export const getTempFile = (params = {}) => {
    return getFile(`/${api}/gridFsFile/getFile`, params)
}
