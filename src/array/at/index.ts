export const at = <T>(arr: T[], i: number): T =>
	i >= 0 ? arr[i] : arr[arr.length + i];
