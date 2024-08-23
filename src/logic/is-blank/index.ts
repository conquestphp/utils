export const isBlank = (v: unknown): boolean =>
	v === null ||
	v === undefined ||
	v === "" ||
	(Array.isArray(v) && v.length === 0) ||
	(typeof v === "object" && Object.keys(v).length === 0);
