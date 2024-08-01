export interface LatestNewsVo {
    id: String  // 主键
    receiverId: String  // 消息从表主键
    title: String // 标题
    sender: String  // 发送人
    sendingTime: String // 发送时间
    isRead: Boolean // 是否已读
    type: Number  // 类型 1-系统通知 2-管理员消息 3-站内信息
    typeCh: String  // 类型 1-系统通知 2-管理员消息 3-站内信息
}
