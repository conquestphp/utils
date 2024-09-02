export const sole = <T>(
	arr: T[],
	predicate: (item: T) => boolean,
): T | undefined => {
	const matches = arr.filter(predicate);
	return matches.length === 1 ? matches[0] : undefined;
};
