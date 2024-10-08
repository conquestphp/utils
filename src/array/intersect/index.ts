export const intersect = <T>(arr: T[], items: T[]) =>
	arr.filter((item) => items.includes(item));
