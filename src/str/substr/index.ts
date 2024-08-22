export const substr = (v: string, s: number, l = 0) =>
	l === 0 ? v.substring(s) : v.substring(s, s + l);
