import { dot } from "../dot";

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