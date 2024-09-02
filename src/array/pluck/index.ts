export const pluck = <T extends object, K extends keyof T>(
	arr: T[],
	...keys: K[]
): (T[K] | Pick<T, K>)[] =>
	(keys.length === 1
		? arr.map((item) => item[keys[0]])
		: arr.map((item) =>
				keys.reduce(
					(obj, key) => ({ ...obj, [key]: item[key] }),
					{} as Pick<T, K>,
				),
			)
	).filter(Boolean);
