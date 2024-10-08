export const flip = <T>(obj: Record<string, T>) =>
	Object.fromEntries(Object.entries(obj).map(([key, value]) => [value, key]));
