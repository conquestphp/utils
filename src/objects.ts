import { isNumber } from ".";

export const dot = (key: string): (string | number)[] =>
	key.split(".").map((part) => (isNumber(Number(part)) ? Number(part) : part));

export const get = (needle: string, haystack: any): any => {
	let current = haystack;
	for (const key of dot(needle)) {
		if (
			current == null ||
			(typeof key === "number" && (key < 0 || key >= current.length)) ||
			(typeof key === "string" && !(key in current))
		) {
			return undefined;
		}
		current = current[key];
	}
	return current;
};

export const isset = (key: string, haystack: any): boolean =>
	get(key, haystack) !== undefined;

// export const pick =

// export const omit =
