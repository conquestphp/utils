export const replaceStart = (v: string, t: string, r: string) =>
	v.startsWith(t) ? r + v.slice(t.length) : v;
