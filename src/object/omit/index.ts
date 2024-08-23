export const omit = <T extends object, K extends PropertyKey>(
	obj: T,
	...keys: K[]
): Omit<T, K & keyof T> =>
	Object.fromEntries(
		Object.entries(obj).filter(([k]) => !keys.includes(k as K)),
	) as Omit<T, K & keyof T>;
