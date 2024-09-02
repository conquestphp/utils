export const reject = <T>(arr: T[], fn: (curr: T, i: number) => boolean) =>
	arr.filter((curr, i) => !fn(curr, i));
