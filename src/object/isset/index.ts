import { get } from "../get";

export const isset = (key: string, haystack: any): boolean =>
	get(key, haystack) !== undefined;
