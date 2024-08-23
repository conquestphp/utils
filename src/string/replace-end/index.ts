export const replaceEnd = (v: string, t: string, r: string) =>
	v.endsWith(t) ? v.slice(0, -t.length) + r : v;
