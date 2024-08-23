export const median = (arr: number[]): number => {
	// const len = arr.length;
	// if (len === 0) return NaN;
	// if (len === 1) return arr[0];
	
	// const mid = len >> 1;
	// const sorted = arr.sort((a, b) => a - b);
	// return len % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
	arr.sort((a, b) => a - b);
	const mid = arr.length >> 1;
	return arr.length % 2 ? arr[mid] : (arr[mid - 1] + arr[mid]) / 2
};
