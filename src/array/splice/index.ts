export const splice = <T>(
	arr: T[],
	s: number,
	d: number = 0,
	...items: T[]
) => {
	const result = [...arr];
	result.splice(s, d, ...items);
	return result;
};
