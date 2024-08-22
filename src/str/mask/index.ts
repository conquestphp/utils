export const mask = (v: string, m = "*", s = 0, l?: number) => {
	const e = l === undefined ? v.length : s + l;
	return m.repeat(s) + v.slice(s, e) + m.repeat(v.length - e);
};