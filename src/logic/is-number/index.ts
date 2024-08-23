export const isNumber = (v: unknown): v is number =>
	(typeof v === "number" && v - v === 0) ||
	(typeof v === "string" && Number.isFinite(+v) && v.trim() !== "");
