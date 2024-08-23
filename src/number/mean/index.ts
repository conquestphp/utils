export const mean = (arr: number[]): number =>
	arr.reduce((acc: number, val: number) => acc + val, 0) / arr.length;
