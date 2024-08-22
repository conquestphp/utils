export const blank = (v: unknown): boolean =>
	v === null ||
	v === undefined ||
	v === "" ||
	(Array.isArray(v) && v.length === 0) ||
	(typeof v === "object" && Object.keys(v).length === 0);

export const isString = (v: unknown): v is string => typeof v === "string";

export const isNumber = (v: unknown): v is number =>
	(typeof v === "number" && v - v === 0) ||
	(typeof v === "string" && Number.isFinite(+v) && v.trim() !== "");

export const isNull = (v: unknown): v is null | undefined =>
	v === null || v === undefined;
