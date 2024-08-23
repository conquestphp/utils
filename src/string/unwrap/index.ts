export const unwrap = (v: string, p: string, s: string) =>
	v.startsWith(p) && v.endsWith(s) ? v.slice(p.length, -s.length) : v;
