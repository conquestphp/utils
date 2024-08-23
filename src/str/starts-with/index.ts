export const startsWith = (v: string, t: string | string[]) =>
	Array.isArray(t) ? t.some((t) => v.startsWith(t)) : v.startsWith(t);
