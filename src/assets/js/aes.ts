import CryptoJS from 'crypto-js'

// 16位随机字符串
//@ts-ignore
const aesKey = import.meta.env.VITE_AES_KEY

// 加密
export const encryptAes = (data: any) => {
  if (aesKey && data) {
    const key = CryptoJS.enc.Utf8.parse(aesKey)
    const encrypt = CryptoJS.AES.encrypt(data, key, {
      iv: key,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    })
    return btoa(encrypt)
  }
}

// 解密
export const decryptAes = (data: any) => {
  if (aesKey && data) {
    const key = CryptoJS.enc.Utf8.parse(aesKey)
    const decrypt = CryptoJS.AES.decrypt(atob(data), key, {
      iv: key,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    })
    return decrypt.toString(CryptoJS.enc.Utf8)
  }
}
