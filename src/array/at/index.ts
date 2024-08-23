export const at = <T>(arr: T[], i: number): T | undefined =>
	i >= 0 ? arr[i] : arr[arr.length + i];
