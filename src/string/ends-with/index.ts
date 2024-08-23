export const endsWith = (v: string, t: string | string[]) =>
	Array.isArray(t) ? t.some((t) => v.endsWith(t)) : v.endsWith(t);