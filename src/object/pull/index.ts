export const pull = <T extends object, K extends keyof T>(
	obj: T,
	key: K,
): T[K] => {
	const v = obj[key];
	delete obj[key];
	return v;
};
