import {get, post, put, remove} from '@/api/http-server'

const api = 'pluginMarket';

/**
 * 新增插件
 * @param data
 */
export const insertPlugin = (data = {}) => {
    return post(`/${api}/pluginmarket/pluginInfo/insert`, data)
}

/**
 * 修改插件
 * @param data
 */
export const updatePlugin = (data = {}) => {
    return put(`/${api}/pluginmarket/pluginInfo/updateById`, data)
}

/**
 * 审核
 * @param data
 */
export const updateAuditPlugin = (data = {}) => {
    return put(`/${api}/pluginmarket/pluginInfo/updateAuditById`, data)
}

/**
 * 修改发布状态
 * @param data
 */
export const updatePublishPlugin = (data = {}) => {
    return put(`/${api}/pluginmarket/pluginInfo/updatePublishById`, data)
}

/**
 * 条件分页查询插件
 * @param params
 */
export const getPluginByPage = (params = {}) => {
    return get(`/${api}/pluginmarket/pluginInfo/getByPage`, params)
}

/**
 * 条件分页查询插件
 * @param params
 */
export const getPluginByPageClient = (params = {}) => {
    return get(`/${api}/pluginmarket/pluginInfo/getByPageClient`, params)
}

/**
 * 根据id查询插件详情
 * @param params
 */
export const getPluginById = (params = {}) => {
    return get(`/${api}/pluginmarket/pluginInfo/getById`, params)
}

/**
 * 根据id查询插件详情
 * @param params
 */
export const getPluginByIdClient = (params = {}) => {
    return get(`/${api}/pluginmarket/pluginInfo/getByIdClient`, params)
}

/**
 * 删除插件
 * @param params
 */
export const deletePluginBatchByIdList = (params = {}) => {
    return remove(`/${api}/pluginmarket/pluginInfo/deleteBatchByIdList`, params)
}

/**
 * 获取收藏数量
 * @param params
 */
export const getCollectCount = (params = {}) => {
    return get(`/${api}/pluginmarket/userFavorites/getCollectCount`, params)
}

/**
 * 获取当前插件收藏状态
 * @param params
 */
export const getCollectTypeByPluginId = (params = {}) => {
    return get(`/${api}/pluginmarket/userFavorites/getCollectTypeByPluginId`, params)
}

/**
 * 新增用户收藏记录
 * @param data
 */
export const insertCollect = (params = {}) => {
    return post(`/${api}/pluginmarket/userFavorites/insert`, {}, params)
}

/**
 * 取消收藏
 * @param params
 */
export const deleteCollectById = (params = {}) => {
    return remove(`/${api}/pluginmarket/userFavorites/deleteById`, params)
}

/**
 * 新增用户下载记录
 * @param data
 */
export const insertDownload = (params = {}) => {
    return post(`/${api}/pluginmarket/userDownloads/insert`, {}, params)
}

/**
 * 获取评论数量
 * @param params
 */
export const getCommentCountByPluginId = (params = {}) => {
    return get(`/${api}/pluginmarket/pluginComment/getCommentCount`, params)
}

/**
 * 新增评论
 * @param data
 */
export const insertComment = (data = {}) => {
    return post(`/${api}/pluginmarket/pluginComment/insert`, data)
}

/**
 * 评论信息
 * @param params
 */
export const getCommentTree = (params = {}) => {
    return get(`/${api}/pluginmarket/pluginComment/getTree`, params)
}

/**
 * 删除评论
 * @param params
 */
export const deleteCommentById = (params = {}) => {
    return remove(`/${api}/pluginmarket/pluginComment/deleteById`, params)
}


/**
 * 获取收藏数量
 * @param params
 */
export const getAppreciateCount = (params = {}) => {
    return get(`/${api}/pluginmarket/userAppreciate/getAppreciateCount`, params)
}

/**
 * 获取当前插件收藏状态
 * @param params
 */
export const getAppreciateTypeByPluginId = (params = {}) => {
    return get(`/${api}/pluginmarket/userAppreciate/getAppreciateTypeByPluginId`, params)
}

/**
 * 新增用户收藏记录
 * @param data
 */
export const insertAppreciate = (params = {}) => {
    return post(`/${api}/pluginmarket/userAppreciate/insert`, {}, params)
}

/**
 * 取消收藏
 * @param params
 */
export const deleteAppreciateById = (params = {}) => {
    return remove(`/${api}/pluginmarket/userAppreciate/deleteById`, params)
}

/**
 * 作者排行分页查询
 * @param params
 */
export const getAuthorRankingByPage = (params = {}) => {
    return get(`/${api}/pluginmarket/pluginInfo/getAuthorRankingByPage`, params)
}

/**
 * 条件分页查询插件
 * @param params
 */
export const getMyPluginByPageClient = (params = {}) => {
    return get(`/${api}/pluginmarket/pluginInfo/getMyPluginByPageClient`, params)
}
/**
 * 条件分页查询插件
 * @param params
 */
export const getMyCollectPluginByPageClient = (params = {}) => {
    return get(`/${api}/pluginmarket/pluginInfo/getMyCollectPluginByPageClient`, params)
}
/**
 * 条件分页查询插件
 * @param params
 */
export const getMyDownloadPluginByPageClient = (params = {}) => {
    return get(`/${api}/pluginmarket/pluginInfo/getMyDownloadPluginByPageClient`, params)
}
/**
 * 收藏夹集合
 * @param params
 */
export const getFavoritesList = (params = {}) => {
    return get(`/${api}/pluginmarket/favoritesInfo/getList`, params)
}
/**
 * 新增收藏夹
 * @param params
 */
export const insertFavorites = (params = {}) => {
    return post(`/${api}/pluginmarket/favoritesInfo/insert`, params)
}
/**
 * 新增收藏夹
 * @param params
 */
export const updateFavorites = (params = {}) => {
    return put(`/${api}/pluginmarket/favoritesInfo/updateById`, params)
}
/**
 * 删除收藏夹
 * @param params
 */
export const deleteFavorites = (params = {}) => {
    return remove(`/${api}/pluginmarket/favoritesInfo/deleteBatchByIdList`, params)
}
/**
 * 新增历史
 * @param params
 */
export const insertHistory = (params = {}) => {
    return post(`/${api}/pluginmarket/footmarkInfo/insert`, {}, params)
}
/**
 * 条件分页查询历史
 * @param params
 */
export const getHistoryByPage = (params = {}) => {
    return get(`/${api}/pluginmarket/footmarkInfo/getByPage`, params)
}
/**
 * 变更展现数量
 * @param data
 */
export const updatePluginShowNum = (data = {}) => {
    return put(`/${api}/pluginmarket/pluginInfo/updateShowNum`, {}, data)
}

/**
 * 变更阅读数量
 * @param data
 */
export const updatePluginReadNum = (data = {}) => {
    return put(`/${api}/pluginmarket/pluginInfo/updateReadNum`, {}, data)
}
/**
 * 关注
 * @param data
 */
export const insertFollower = (data = {}) => {
    return post(`/${api}/pluginmarket/followerInfo/insert`, data)
}
/**
 * 取消关注
 * @param data
 */
export const deleteByFolloweeId = (data = {}) => {
    return remove(`/${api}/pluginmarket/followerInfo/deleteByFolloweeId`, data)
}
/**
 * 获取当前关注状态
 * @param params
 */
export const getFollowerTypeByFolloweeId = (params = {}) => {
    return get(`/${api}/pluginmarket/followerInfo/getFollowerTypeByFolloweeId`, params)
}
