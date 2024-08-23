export const chopEnd = (v: string, t: string | string[]) => {
	const i = Array.isArray(t)
		? t.reduce((i, t) => Math.max(i, v.lastIndexOf(t)), -1)
		: v.lastIndexOf(t);
	return i === -1 ? v : v.slice(0, i);
};