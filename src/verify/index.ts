import i18n from '@/locales'
import {
    address,
    capitalizedEnglishAndUnderline,
    chineseAndEnglish,
    email,
    english,
    englishAndNumberAndDecimalPoint,
    englishAndSlash,
    number,
    password,
    phone,
    roleCode
} from '@/assets/js/regexp'

const {t}: any = i18n.global

export const remarkRegexp = (rule: any, value: any, callback: any) => {
    if (value.length > 900) {
        callback(t('message.enterParameterLength', [
            t('message.remark'),
            t('message.zero'),
            t('message.nineHundred')]))
        return
    }
    callback()
}

export const sortRegexp = (rule: any, value: any, callback: any) => {
    if (value == null) {
        callback(t('message.enterParameter', {
            parameter: t('message.sort')
        }))
        return
    }
    callback()
}

export const parentIdRegexp = (rule: any, value: any, callback: any) => {
    if (value.length === 0) {
        callback(t('message.selectParameter', {
            parameter: t('message.parentId')
        }))
        return
    }
    callback()
}

export const contentRegexp = (rule: any, value: any, callback: any) => {
    if (value.length === 0) {
        callback(t('message.enterParameter', {
            parameter: t('message.contents')
        }))
        return
    }
    callback()
}

export const emailRegexp = (rule: any, value: any, callback: any) => {
    if (value.length === 0) {
        callback(t('message.enterParameter', {
            parameter: t('message.email')
        }))
        return
    }
    if (!email.test(value)) {
        callback(t('message.emailRegexp'))
        return
    }
    callback()
}

export const descriptionRegexp = (rule: any, value: any, callback: any) => {
    if (value.length === 0) {
        callback(t('message.enterParameter', {
            parameter: t('message.describe')
        }))
        return
    }
    callback()
}
export const fileListRegexp = (rule: any, value: any, callback: any) => {
    if (value.length === 0) {
        callback(t('message.selectParameter', {
            parameter: t('message.file')
        }))
        return
    }
    callback()
}

export const addressRegexp = (rule: any, value: any, callback: any) => {
    if (!address.test(value)) {
        callback(t('message.addressRegexp'))
        return
    }
    callback()
}
export const titleRegexp = (rule: any, value: any, callback: any) => {
    if (value.length === 0) {
        callback(t('message.enterParameter', {
            parameter: t('message.title')
        }))
        return
    }
    if (value.length > 90) {
        callback(t('message.enterParameterLength', [
            t('message.title'),
            t('message.one'),
            t('message.ninety')
        ]))
        return
    }
    callback()
}
export const codeRegexp = (rule: any, value: any, callback: any) => {
    if (value.length === 0) {
        callback(t('message.enterParameter', {
            parameter: t('message.code')
        }))
        return
    }
    if (value.length > 90) {
        callback(t('message.enterParameterLength', [
            t('message.code'),
            t('message.one'),
            t('message.ninety')
        ]))
        return
    }
    callback()
}

export const adTitleRegexp = (rule: any, value: any, callback: any) => {
    if (value.length === 0) {
        callback(t('message.enterParameter', {
            parameter: t('message.adTitle')
        }))
        return
    }
    if (value.length > 90) {
        callback(t('message.enterParameterLength', [
            t('message.adTitle'),
            t('message.one'),
            t('message.ninety')
        ]))
        return
    }
    callback()
}

export const adPictureRegexp = (rule: any, value: any, callback: any) => {
    if (value.length === 0) {
        callback(t('message.selectParameter', {
            parameter: t('message.adPicture')
        }))
        return
    }
    callback()
}

export const adLinkRegexp = (rule: any, value: any, callback: any) => {
    if (value.length === 0) {
        callback(t('message.selectParameter', {
            parameter: t('message.adLink')
        }))
        return
    }
    callback()
}

export const productIdRegexp = (rule: any, value: any, callback: any) => {
    if (value.length === 0) {
        callback(t('message.enterParameter', {
            parameter: t('message.product')
        }))
        return
    }
    callback()
}

export const userIdRegexp = (rule: any, value: any, callback: any) => {
    if (value.length === 0) {
        callback(t('message.enterParameter', {
            parameter: t('message.userId')
        }))
        return
    }
    callback()
}

export const productNameRegexp = (rule: any, value: any, callback: any) => {
    if (value.length === 0) {
        callback(t('message.enterParameter', {
            parameter: t('message.productName')
        }))
        return
    }
    if (value.length > 90) {
        callback(t('message.enterParameterLength', [
            t('message.productName'),
            t('message.one'),
            t('message.ninety')
        ]))
        return
    }
    callback()
}

export const priceRegexp = (rule: any, value: any, callback: any) => {
    if (value.length === 0) {
        callback(t('message.enterParameter', {
            parameter: t('message.price')
        }))
        return
    }
    if (value.length > 10) {
        callback(t('message.enterParameterLength', [
            t('message.price'),
            t('message.one'),
            t('message.ten')
        ]))
        return
    }
    if (!number.test(value)) {
        callback(t('message.value1Regexp', [
            t('message.price'),
            t('message.number'),
        ]))
        return
    }
    callback()
}

export const versionNumberRegexp = (rule: any, value: any, callback: any) => {
    if (value.length === 0) {
        callback(t('message.enterParameter', {
            parameter: t('message.versionNumber')
        }))
        return
    }
    if (value.length > 90) {
        callback(t('message.enterParameterLength', [
            t('message.versionNumber'),
            t('message.one'),
            t('message.ninety')
        ]))
        return
    }
    if (!englishAndNumberAndDecimalPoint.test(value)) {
        callback(t('message.value3Regexp', [
            t('message.versionNumber'),
            t('message.english'),
            t('message.number'),
            t('message.decimalPoint')
        ]))
        return
    }
    callback()
}
export const pluginNameRegexp = (rule: any, value: any, callback: any) => {
    if (value.length === 0) {
        callback(t('message.enterParameter', {
            parameter: t('message.pluginName')
        }))
        return
    }
    if (value.length > 90) {
        callback(t('message.enterParameterLength', [
            t('message.pluginName'),
            t('message.one'),
            t('message.ninety')
        ]))
        return
    }
    callback()
}
export const pluginInstructionsRegexp = (rule: any, value: any, callback: any) => {
    if (value.length === 0) {
        callback(t('message.enterParameter', {
            parameter: t('message.pluginInstructions')
        }))
        return
    }
    callback()
}
export const tagNameRegexp = (rule: any, value: any, callback: any) => {
    if (value.length === 0) {
        callback(t('message.enterParameter', {
            parameter: t('message.tagName')
        }))
        return
    }
    if (value.length > 90) {
        callback(t('message.enterParameterLength', [
            t('message.tagName'),
            t('message.one'),
            t('message.ninety')
        ]))
        return
    }
    callback()
}
export const dictNameRegexp = (rule: any, value: any, callback: any) => {
    if (value.length === 0) {
        callback(t('message.enterParameter', {
            parameter: t('message.dictName')
        }))
        return
    }
    if (value.length > 90) {
        callback(t('message.enterParameterLength', [
            t('message.dictName'),
            t('message.one'),
            t('message.ninety')
        ]))
        return
    }
    callback()
}

export const dictValueRegexp = (rule: any, value: any, callback: any) => {
    if (value.length === 0) {
        callback(t('message.enterParameter', {
            parameter: t('message.dictValue')
        }))
        return
    }
    if (value.length > 90) {
        callback(t('message.enterParameterLength', [
            t('message.dictValue'),
            t('message.one'),
            t('message.ninety')
        ]))
        return
    }
    callback()
}

export const dictTypeRegexp = (rule: any, value: any, callback: any) => {
    if (value.length === 0) {
        callback(t('message.enterParameter', {
            parameter: t('message.dictType')
        }))
        return
    }
    if (value.length > 90) {
        callback(t('message.enterParameterLength', [
            t('message.dictType'),
            t('message.one'),
            t('message.ninety')
        ]))
        return
    }
    if (!english.test(value)) {
        callback(t('message.value1Regexp', [
            t('message.dictType'),
            t('message.english')
        ]))
        return
    }
    callback()
}

export const dictLevelRegexp = (rule: any, value: any, callback: any) => {
    if (value.length === 0) {
        callback(t('message.selectParameter', {
            parameter: t('message.dictLevel')
        }))
        return
    }
    callback()
}
export const statNameRegexp = (rule: any, value: any, callback: any) => {
    if (value.length === 0) {
        callback(t('message.enterParameter', {
            parameter: t('message.statName')
        }))
        return
    }
    if (value.length > 90) {
        callback(t('message.enterParameterLength', [
            t('message.statName'),
            t('message.one'),
            t('message.ninety')
        ]))
        return
    }
    callback()
}

export const abbreviationRegexp = (rule: any, value: any, callback: any) => {
    if (value.length === 0) {
        callback(t('message.enterParameter', {
            parameter: t('message.abbreviation')
        }))
        return
    }
    if (value.length > 90) {
        callback(t('message.enterParameterLength', [
            t('message.abbreviation'),
            t('message.one'),
            t('message.ninety')
        ]))
        return
    }
    if (!chineseAndEnglish.test(value)) {
        callback(t('message.value1Regexp', [
            t('message.abbreviation'),
            t('message.english')
        ]))
        return
    }
    callback()
}
export const typeRegexp = (rule: any, value: any, callback: any) => {
    if (value.length === 0) {
        callback(t('message.selectParameter', {
            parameter: t('message.type')
        }))
        return
    }
    callback()
}
export const menuCodeRegexp = (rule: any, value: any, callback: any) => {
    if (value.length === 0) {
        callback(t('message.enterParameter', {
            parameter: t('message.menuCode')
        }))
        return
    }
    if (value.length > 90) {
        callback(t('message.enterParameterLength', [
            t('message.menuCode'),
            t('message.one'),
            t('message.ninety')
        ]))
        return
    }
    if (!english.test(value)) {
        callback(t('message.value1Regexp', [
            t('message.menuCode'),
            t('message.english'),
        ]))
        return
    }
    callback()
}

export const menuNameRegexp = (rule: any, value: any, callback: any) => {
    if (value.length === 0) {
        callback(t('message.enterParameter', {
            parameter: t('message.menuName')
        }))
        return
    }
    if (value.length > 90) {
        callback(t('message.enterParameterLength', [
            t('message.menuName'),
            t('message.one'),
            t('message.ninety')
        ]))
        return
    }
    callback()
}

export const menuNameEnRegexp = (rule: any, value: any, callback: any) => {
    if (value.length === 0) {
        callback(t('message.enterParameter', {
            parameter: t('message.menuNameEn')
        }))
        return
    }
    if (value.length > 90) {
        callback(t('message.enterParameterLength', [
            t('message.menuNameEn'),
            t('message.one'),
            t('message.ninety')
        ]))
        return
    }
    callback()
}

export const menuLevelRegexp = (rule: any, value: any, callback: any) => {
    if (value.length === 0) {
        callback(t('message.selectParameter', {
            parameter: t('message.menuLevel')
        }))
        return
    }
    callback()
}

export const menuIconRegexp = (rule: any, value: any, callback: any) => {
    if (value.length === 0) {
        callback(t('message.selectParameter', {
            parameter: t('message.menuIcon')
        }))
        return
    }
    callback()
}

export const menuComponentRegexp = (rule: any, value: any, callback: any) => {
    if (value.length === 0) {
        callback(t('message.enterParameter', {
            parameter: t('message.menuComponent')
        }))
        return
    }
    if (value.length > 150) {
        callback(t('message.enterParameterLength', [
            t('message.menuComponent'),
            t('message.one'),
            t('message.oneHundredFifty')
        ]))
        return
    }
    if (!englishAndSlash.test(value)) {
        callback(t('message.menuComponentRegexp'))
        callback(t('message.value2Regexp', [
            t('message.menuComponent'),
            t('message.english'),
            t('message.slash'),
        ]))
        return
    }
    callback()
}

export const menuPathRegexp = (rule: any, value: any, callback: any) => {
    if (value.length === 0) {
        callback(t('message.enterParameter', {
            parameter: t('message.menuPath')
        }))
        return
    }
    if (value.length > 100) {
        callback(t('message.enterParameterLength', [
            t('message.menuPath'),
            t('message.one'),
            t('message.oneHundred')
        ]))
        return
    }
    if (!englishAndSlash.test(value)) {
        callback(t('message.menuPathRegexp'))
        callback(t('message.value2Regexp', [
            t('message.menuPath'),
            t('message.english'),
            t('message.slash'),
        ]))
        return
    }
    callback()
}
export const orgNameRegexp = (rule: any, value: any, callback: any) => {
    if (value.length === 0) {
        callback(t('message.enterParameter', {
            parameter: t('message.orgName')
        }))
        return
    }
    if (value.length > 90) {
        callback(t('message.enterParameterLength', [
            t('message.orgName'),
            t('message.one'),
            t('message.ninety')
        ]))
        return
    }
    callback()
}

export const orgTypeRegexp = (rule: any, value: any, callback: any) => {
    if (value.length === 0) {
        callback(t('message.selectParameter', {
            parameter: t('message.orgType')
        }))
        return
    }
    callback()
}
export const postCodeRegexp = (rule: any, value: any, callback: any) => {
    if (value.length === 0) {
        callback(t('message.enterParameter', {
            parameter: t('message.postCode')
        }))
        return
    }
    if (value.length > 90) {
        callback(t('message.enterParameterLength', [
            t('message.postCode'),
            t('message.one'),
            t('message.ninety')
        ]))
        return
    }
    if (!capitalizedEnglishAndUnderline.test(value)) {
        callback(t('message.value2Regexp', [
            t('message.postCode'),
            t('message.english'),
            t('message.underline'),
        ]))
        return
    }
    callback()
}
export const postNameRegexp = (rule: any, value: any, callback: any) => {
    if (value.length === 0) {
        callback(t('message.enterParameter', {
            parameter: t('message.postName')
        }))
        return
    }
    if (value.length > 90) {
        callback(t('message.enterParameterLength', [
            t('message.postName'),
            t('message.one'),
            t('message.ninety')
        ]))
        return
    }
    callback()
}
export const roleCodeRegexp = (rule: any, value: any, callback: any) => {
    if (value.length === 0) {
        callback(t('message.enterParameter', {
            parameter: t('message.roleCode')
        }))
        return
    }
    if (value.length < 6 || value.length > 90) {
        callback(t('message.enterParameterLength', [
            t('message.roleCode'),
            t('message.six'),
            t('message.ninety')
        ]))
        return
    }
    if (!roleCode.test(value)) {
        callback(t('message.roleCodeRegexp'))
        return
    }
    callback()
}

export const roleNameRegexp = (rule: any, value: any, callback: any) => {
    if (value.length === 0) {
        callback(t('message.enterParameter', {
            parameter: t('message.roleName')
        }))
        return
    }
    if (value.length > 90) {
        callback(t('message.enterParameterLength', [
            t('message.roleName'),
            t('message.one'),
            t('message.ninety')
        ]))
        return
    }
    callback()
}

export const tenantNameRegexp = (rule: any, value: any, callback: any) => {
    if (value.length === 0) {
        callback(t('message.enterParameter', {
            parameter: t('message.tenantName')
        }))
        return
    }
    if (value.length > 90) {
        callback(t('message.enterParameterLength', [
            t('message.tenantName'),
            t('message.one'),
            t('message.ninety')
        ]))
        return
    }
    callback()
}
export const urlRegexp = (rule: any, value: any, callback: any) => {
    if (value.length === 0) {
        callback(t('message.enterParameter', {
            parameter: t('message.url')
        }))
        return
    }
    if (value.length > 150) {
        callback(t('message.enterParameterLength', [
            t('message.url'),
            t('message.one'),
            t('message.oneHundredFifty')
        ]))
        return
    }
    if (!englishAndSlash.test(value)) {
        callback(t('message.value2Regexp', [
            t('message.url'),
            t('message.english'),
            t('message.slash')
        ]))
        return
    }
    callback()
}

export const menuIdRegexp = (rule: any, value: any, callback: any) => {
    if (value.length === 0) {
        callback(t('message.selectParameter', {
            parameter: t('message.menuId')
        }))
        return
    }
    callback()
}
export const usernameRegexp = (rule: any, value: any, callback: any) => {
    if (value.length === 0) {
        callback(t('message.enterParameter', {
            parameter: t('message.username')
        }))
        return
    }
    if (value.length > 90) {
        callback(t('message.enterParameterLength', [
            t('message.username'),
            t('message.one'),
            t('message.ninety')
        ]))
        return
    }
    callback()
}

export const pwdRegexp = (rule: any, value: any, callback: any) => {
    if (value.length === 0) {
        callback(t('message.enterParameter', {
            parameter: t('message.pwd')
        }))
        return
    }
    if (value.length < 6 || value.length > 8) {
        callback(t('message.enterParameterLength', [
            t('message.pwd'),
            t('message.six'),
            t('message.eight')
        ]))
        return
    }
    if (!password.test(value)) {
        callback(t('message.pwdRegexp'))
        return
    }
    callback()
}

export const oldPwdRegexp = (rule: any, value: any, callback: any) => {
    if (value.length === 0) {
        callback(t('message.enterParameter', {
            parameter: t('message.oldPwd')
        }))
        return
    }
    if (value.length < 6 || value.length > 8) {
        callback(t('message.enterParameterLength', [
            t('message.oldPwd'),
            t('message.six'),
            t('message.eight')
        ]))
        return
    }
    if (!password.test(value)) {
        callback(t('message.oldPwdRegexp'))
        return
    }
    callback()
}

export const newPwdRegexp = (rule: any, value: any, callback: any) => {
    if (value.length === 0) {
        callback(t('message.enterParameter', {
            parameter: t('message.newPwd')
        }))
        return
    }
    if (value.length < 6 || value.length > 8) {
        callback(t('message.enterParameterLength', [
            t('message.newPwd'),
            t('message.six'),
            t('message.eight')
        ]))
        return
    }
    if (!password.test(value)) {
        callback(t('message.newPwdRegexp'))
        return
    }
    callback()
}

export const confirmPwdRegexp = (rule: any, value: any, callback: any) => {
    if (value.length === 0) {
        callback(t('message.enterParameter', {
            parameter: t('message.confirmPwd')
        }))
        return
    }
    if (value.length < 6 || value.length > 8) {
        callback(t('message.enterParameterLength', [
            t('message.confirmPwd'),
            t('message.six'),
            t('message.eight')
        ]))
        return
    }
    if (!password.test(value)) {
        callback(t('message.confirmPwdRegexp'))
        return
    }
    callback()
}

export const nicknameRegexp = (rule: any, value: any, callback: any) => {
    if (value.length === 0) {
        callback(t('message.enterParameter', {
            parameter: t('message.nickname')
        }))
        return
    }
    if (value.length > 90) {
        callback(t('message.enterParameterLength', [
            t('message.nickname'),
            t('message.one'),
            t('message.ninety')
        ]))
        return
    }
    callback()
}

export const mobileRegexp = (rule: any, value: any, callback: any) => {
    if (value && !phone.test(value)) {
        callback(t('message.mobileRegexp'))
        return
    }
    callback()
}

export const tenantRegexp = (rule: any, value: any, callback: any) => {
    if (value.length === 0) {
        callback(t('message.selectParameter', {
            parameter: t('message.tenant')
        }))
        return
    }
    callback()
}

export const roleRegexp = (rule: any, value: any, callback: any) => {
    if (value.length === 0) {
        callback(t('message.selectParameter', {
            parameter: t('message.role')
        }))
        return
    }
    callback()
}

export const orgAndPostRegexp = (rule: any, value: any, callback: any) => {
    if (value.length === 0) {
        callback(t('message.selectParameter', {
            parameter: t('message.orgAndPostList')
        }))
        return
    }
    callback()
}

export const orgRegexp = (rule: any, value: any, callback: any) => {
    if (value.length === 0) {
        callback(t('message.selectParameter', {
            parameter: t('message.org')
        }))
        return
    }
    callback()
}

export const postRegexp = (rule: any, value: any, callback: any) => {
    if (value.length === 0) {
        callback(t('message.selectParameter', {
            parameter: t('message.post')
        }))
        return
    }
    callback()
}

export const isMainDeptRegexp = (rule: any, value: any, callback: any) => {
    if (value.length === 0) {
        callback(t('message.selectParameter', {
            parameter: t('message.mainDept')
        }))
        return
    }
    callback()
}
