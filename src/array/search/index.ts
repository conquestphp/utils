export const search = <T>(arr: T[], v: T|keyof T): number|false => {
    const index = arr.findIndex(curr => curr === v);
    return index !== -1 ? index : false;
}