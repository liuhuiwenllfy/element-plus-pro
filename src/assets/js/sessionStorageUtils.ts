export const getSession = (key: string) => {
    return localStorage.getItem(key)
}

export const getDefaultSession = (key: string) => {
    return localStorage.getItem(key)
}

export const setSession = (key: string, val: any) => {
    localStorage.setItem(key, val)
}

export const hasSession = (key: string) => {
    return Boolean(localStorage.getItem(key))
}

export const removeSession = (key: string) => {
    localStorage.removeItem(key)
}
