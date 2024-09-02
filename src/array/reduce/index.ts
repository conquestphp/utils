export const reduce = <T, U>(
	arr: T[],
	fn: (acc: U, curr: T) => U,
	initial: U,
) => arr.reduce(fn, initial);
