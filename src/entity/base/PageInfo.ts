export interface PageInfo {
  page: number,//页码
  pageSize: number,//页大小
  ascs?: String,//正序排序字段逗号拼接字符串（对应数据库字段）
  descs?: String,//倒序排序字段逗号拼接字符串（对应数据库字段）
}
