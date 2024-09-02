export const filter = <T>(arr: T[], fn: (x: T, i: number) => boolean): T[] =>
	arr.filter(fn);
