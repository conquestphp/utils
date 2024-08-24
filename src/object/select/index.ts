export const select = <T extends object, K extends keyof T>(arr: T, ...keys: K[]): Pick<T, K> => 
    Object.fromEntries(keys.map(key => [key, arr[key]])) as Pick<T, K>;