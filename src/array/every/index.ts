export const every = <T>(
	arr: T[],
	fn: (item: T, index: number) => boolean,
): boolean => arr.every(fn);
