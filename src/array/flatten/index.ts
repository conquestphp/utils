export const flatten = <T>(arr: T[], depth: number = 1): T[] =>
	arr.flat(depth) as T[];
