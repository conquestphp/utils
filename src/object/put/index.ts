export const put = <T extends object>(
	obj: T,
	key: keyof T,
	value: T[keyof T],
) => (obj[key] = value);
