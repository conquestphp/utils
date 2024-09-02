export const flatMap = <T, U>(arr: T[], fn: (x: T) => U[]): U[] =>
	arr.flatMap(fn);
