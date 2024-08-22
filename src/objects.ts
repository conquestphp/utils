import { isNumber } from '.' 

export const dotNotation = (key: string): (string | number)[] => key.split('.').map(part => isNumber(Number(part)) ? Number(part) : part);

export const get = (needle: string, haystack: any): any => {
    const keys = dotNotation(needle);
    let current = haystack;

    for (const key of keys) {
        if (current === null || current === undefined) {
            return null;
        }
        if (typeof key === 'number') {
            if (key < 0 || key >= current.length) {
                return null;
            }
            current = current[key];
        } else {
            if (!(key in current)) {
                return null;
            }
            current = current[key];
        }
    }

    return current;
}