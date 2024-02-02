import { decryptAes, encryptAes } from '@/assets/js/aes'
import { store } from '@/vuex/store'

export const getSession = (key: string) => {
  const val = localStorage.getItem(key)
  if (store.state.encrypt && val) {
    const decryptedVal = decryptAes(val)
    try {
      return JSON.parse(decryptedVal)
    } catch {
      return decryptedVal
    }
  }
  try {
    return JSON.parse(val)
  } catch {
    return val
  }
}

export const getDefaultSession = (key: string) => {
  return localStorage.getItem(key)
}

export const setSession = (key: string, val: any) => {
  const isString = typeof val === 'string'
  const jsonVal = isString ? val : JSON.stringify(val)
  const encryptedVal = store.state.encrypt ? encryptAes(jsonVal) : jsonVal
  localStorage.setItem(key, encryptedVal)
}

export const hasSession = (key: string) => {
  return Boolean(localStorage.getItem(key))
}

export const removeSession = (key: string) => {
  localStorage.removeItem(key)
}
