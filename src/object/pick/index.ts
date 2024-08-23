export const pick = <T extends object, K extends keyof T>(obj: T, ...keys: K[]): Pick<T, K> => 
    Object.fromEntries(Object.entries(obj).filter(([k]) => keys.includes(k as K))) as Pick<T, K>;