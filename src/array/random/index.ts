export const random = <T>(arr: T[]) =>
	arr[Math.floor(Math.random() * arr.length)];
