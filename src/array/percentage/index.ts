export const percentage = <T>(arr: T[], fn: (item: T) => boolean) =>
	arr.length === 0 ? 0 : (arr.filter(fn).length / arr.length) * 100;
