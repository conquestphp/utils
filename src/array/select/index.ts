export const select = <T extends object, K extends keyof T>(arr: T[], ...keys: K[]): Pick<T, K>[] =>
    arr.map(item => {
        const result: Partial<Pick<T, K>> = {};
        keys.forEach(key => {
            if (key in item) {
                result[key] = item[key];
            }
        });
        return result as Pick<T, K>;
    })