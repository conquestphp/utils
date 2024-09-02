export const each = <T>(arr: T[], fn: (item: T, index: number) => void): void =>
	arr.forEach(fn);
