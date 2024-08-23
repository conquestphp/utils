export const contains = (v: string, t: string, c = false) =>
	c ? v.includes(t) : v.toLowerCase().includes(t.toLowerCase());
