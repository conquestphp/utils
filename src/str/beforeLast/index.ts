export const beforeLast = (v: string, t: string) => {
	const i = v.lastIndexOf(t);
	return i === -1 ? v : v.slice(0, i);
};