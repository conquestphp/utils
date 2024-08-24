export const forget = <T, K extends keyof T>(obj: T, ...keys: K[]) => {
    for (const key of keys) {
        delete obj[key]
    }
    return obj
}