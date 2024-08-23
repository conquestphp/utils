export const median = (arr: number[]): number => {
	arr.sort((a, b) => a - b);
	const mid = arr.length >> 1;
	return arr.length % 2 ? arr[mid] : (arr[mid - 1] + arr[mid]) / 2;
};
