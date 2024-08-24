export const pluck = <T, K extends keyof T>(arr: T[], ...keys: K[]) => 
    arr.map(item => keys.map(key => item[key]).filter(Boolean))