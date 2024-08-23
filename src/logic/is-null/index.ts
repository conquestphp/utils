export const isNull = (v: unknown): v is null | undefined =>
	v === null || v === undefined;
