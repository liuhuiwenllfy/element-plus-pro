//中英文
export const chineseAndEnglish = /^$|^[\u4E00-\u9FA5A-Za-z]+$/
//英文
export const english = /^$|^[A-Za-z]+$/
//英文和数字
export const englishAndNumber = /^$|^[A-Za-z0-9]+$/
//角色
export const roleCode = /^$|^ROLE_[A-Z_]+$/

// 英文和斜杠
export const englishAndSlash = /^$|^[A-Za-z/]+$/

//英文加空格
export const englishAndSpace = /^$|^[A-Za-z ]+$/

// 大写英文数字和下划线
export const capitalizedEnglishAndUnderline = /^$|^[A-Z0-9_]+$/

// 邮箱
export const email = /^$|^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

// 手机号
export const phone = /^$|^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/

// 密码
export const password = /^$|^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/

//数字
export const number = /^$|^[0-9]+$/

// 地址
export const address = /^$|^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\\?#].*)?$/
//英文、数字和小数点
export const englishAndNumberAndDecimalPoint = /^$|^[A-Za-z0-9\\.]+$/
