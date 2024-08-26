export const forget = <T, K extends keyof T>(obj: T, ...keys: K[]) => {
    keys.forEach(key => delete obj[key]);
    return obj;
}