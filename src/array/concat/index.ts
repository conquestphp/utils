export const concat = <T>(...arrays: T[][]): T[] => arrays.flat(1) as T[];
