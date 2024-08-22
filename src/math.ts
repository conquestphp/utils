export const mean = (arr: number[]): number =>
	arr.reduce((acc: number, val: number) => acc + val, 0) / arr.length;

export const median = (arr: number[]): number => {
	arr.sort((a, b) => a - b);
	const mid = arr.length >> 1;
	return arr.length % 2 ? arr[mid] : (arr[mid - 1] + arr[mid]) / 2;
};

export const min = <T>(args: T[], by?: (arg: T) => number | string): T =>
	args.sort((a, b) => {
		const aValue = by ? by(a) : a;
		const bValue = by ? by(b) : b;
		return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
	})[0];

export const max = <T>(args: T[], by?: (arg: T) => number | string): T =>
	args.sort((a, b) => {
		const aValue = by ? by(a) : a;
		const bValue = by ? by(b) : b;
		return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
	})[args.length - 1];
